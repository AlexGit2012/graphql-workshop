import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Pizza {
        id: ID!
        name: String!
        minPrice: Int!
        price: PizzaPrice!
        image: String!
        popularity: String!
        filter: [String!]!
    }

    type PizzaInOrder {
        id: ID!
        currentPrice: Int!
        currentShape: String!
        currentSize: String!
        pizzaID: ID!
    }

    type PizzaPrice {
        traditional: OptionPrice!
        slim: OptionPrice!
    }

    type OptionPrice {
        small: Int!
        medium: Int!
        big: Int!
    }

    type Order {
        id: ID!
        orderPizzas: [PizzaInOrder!]!
        pizzasAmount: Int!
        pizzasTotalPrice: Int!
    }

    type Query {
        pizzas: [Pizza!]!
        pizza(id: ID!): Pizza!
        price(name: String!, shape: String!, size: String!): Int!
        orders: [Order!]!
        order(id: ID): Order!
    }
`;
