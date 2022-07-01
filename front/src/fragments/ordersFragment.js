import { gql } from '@apollo/client';

export const ORDER_FRAGMENT = gql`
    fragment orderFields on Order {
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
`;
