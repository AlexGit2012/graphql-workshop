import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const initialStorageValue = {
    orderPizzas: [],
    pizzasAmount: 0,
    pizzasTotalPrice: 0,
};

export const localOrderState = makeVar(initialStorageValue);

export const client = new ApolloClient({
    uri: 'http://localhost:5000/',
    cache: new InMemoryCache(),
});
