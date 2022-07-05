import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
    mutation AddOrder(
        $orderPizzas: [PizzaInOrderInput]
        $pizzasAmount: Int!
        $pizzasTotalPrice: Int!
    ) {
        addOrder(
            orderPizzas: $orderPizzas
            pizzasAmount: $pizzasAmount
            pizzasTotalPrice: $pizzasTotalPrice
        ) {
            __typename
            id
            orderPizzas {
                id
                currentAmount
                currentPrice
                currentShape
                currentSize
                pizzaID
            }
            pizzasAmount
            pizzasTotalPrice
        }
    }
`;
