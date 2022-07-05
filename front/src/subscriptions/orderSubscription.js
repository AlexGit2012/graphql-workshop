import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from '../fragments/ordersFragment';

export const ORDERS_SUBSCRIPTION = gql`
    ${ORDER_FRAGMENT}
    subscription ordersSubscription {
        orderCreated {
            ...orderFields
        }
    }
`;
