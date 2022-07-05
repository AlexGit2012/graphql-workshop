import { gql } from '@apollo/client';

export const PIZZA_FRAGMENT = gql`
    fragment pizzaFields on Pizza {
        id
        name
        image
        popularity
        minPrice
        filter
        price {
            traditional {
                small
                medium
                big
            }
            slim {
                small
                medium
                big
            }
        }
    }
`;
