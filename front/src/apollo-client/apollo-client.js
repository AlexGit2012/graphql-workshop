import { ApolloClient, HttpLink, InMemoryCache, makeVar, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

export const initialStorageValue = {
    orderPizzas: [],
    pizzasAmount: 0,
    pizzasTotalPrice: 0,
};

export const localOrderState = makeVar(initialStorageValue);

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:5000/graphql',
        options: { reconnect: true },
    })
);

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache({
        typePolicies: {
            Pizza: {
                keyFields: ['id', 'name', 'popularity'],
            },
            PizzaInOrder: {
                keyFields: ['id'],
            },
            Order: {
                keyFields: ['id', 'pizzasAmount', 'pizzasTotalPrice'],
            },
        },
    }),
});
