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

export const PIZZA_PRICE_FRAGMENT = gql`
    fragment pizzaPrices on Pizza {
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
