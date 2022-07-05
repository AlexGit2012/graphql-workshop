import { gql } from '@apollo/client';
import { PIZZA_FRAGMENT } from '../fragments/pizzaFragments';
import { ORDER_FRAGMENT } from '../fragments/ordersFragment';

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

export const GET_ALL_ORDERS = gql`
    ${ORDER_FRAGMENT}
    query GetAllOrders {
        orders {
            ...orderFields
        }
    }
`;
