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

    type PizzaPrice {
        traditional: OptionPrice!
        slim: OptionPrice!
    }

    type OptionPrice {
        small: Int!
        medium: Int!
        big: Int!
    }

    type PizzaInOrder {
        id: ID!
        currentAmount: Int!
        currentPrice: Int!
        currentShape: String!
        currentSize: String!
        pizzaID: ID!
    }

    type Order {
        id: ID!
        orderPizzas: [PizzaInOrder]
        pizzasAmount: Int!
        pizzasTotalPrice: Int!
    }

    input PizzaInOrderInput {
        id: ID!
        currentAmount: Int!
        currentPrice: Int!
        currentShape: String!
        currentSize: String!
        pizzaID: ID!
    }

    type Query {
        pizzas: [Pizza!]!
        pizza(id: ID!): Pizza!
        price(name: String!, shape: String!, size: String!): Int!
        orders: [Order!]!
        order(id: ID): Order!
    }

    type Mutation {
        addOrder(
            orderPizzas: [PizzaInOrderInput]
            pizzasAmount: Int!
            pizzasTotalPrice: Int!
        ): Order
    }
`;
