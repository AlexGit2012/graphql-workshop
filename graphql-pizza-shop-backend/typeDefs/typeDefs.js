import { gql } from "apollo-server";

export const typeDefs = gql`
  type Pizza {
    name: String!
    price: PizzaPrice!
    image: String!
    popularity: String!
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

  type Query {
    pizzas: [Pizza!]!
    pizza(name: String!): Pizza!
    price(name: String!, shape: String!, size: String!): Int!
  }
`;