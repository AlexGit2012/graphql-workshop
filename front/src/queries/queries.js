import { gql } from '@apollo/client';
import { PIZZA_FRAGMENT, PIZZA_PRICE_FRAGMENT } from '../fragments/pizzaFragments';

export const GET_ALL_PIZZAS = gql`
    ${PIZZA_FRAGMENT}
    query GetAllPizzas {
        pizzas {
            ...pizzaFields
        }
    }
`;

export const GET_PIZZA = gql`
    ${PIZZA_FRAGMENT}
    query GetPizza($id: ID!) {
        pizza(id: $id) {
            ...pizzaFields
        }
    }
`;

export const GET_PIZZA_PRICE = gql`
    ${PIZZA_PRICE_FRAGMENT}
    query GetPizzaPrice($id: ID!) {
        pizza(id: $id) {
            ...pizzaPrices
        }
    }
`;
