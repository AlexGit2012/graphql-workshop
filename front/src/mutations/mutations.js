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
            orderPizzas {
                id
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
