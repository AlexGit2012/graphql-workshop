import React, { useEffect } from 'react';
import styles from './OrdersPage.module.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_ORDERS } from '../../queries/queries';
import OrderItem from './OrderItem/OrderItem';
import { ORDERS_SUBSCRIPTION } from '../../subscriptions/orderSubscription';

const OrdersPage = () => {
    const { loading, data, subscribeToMore } = useQuery(GET_ALL_ORDERS, {
        fetchPolicy: 'cache-and-network',
        // fetchPolicy: 'cache-only',
    });

    useEffect(() => {
        subscribeToMore({
            document: ORDERS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData) {
                    return prev;
                }
                const newOrder = subscriptionData?.data?.orderCreated;
                const updatedOrderList = Object.assign({}, prev, {
                    orders: [...prev.orders, newOrder],
                });
                return updatedOrderList;
            },
        });
    }, [subscribeToMore]);

    return (
        <div className={styles.orders__wrapper}>
            <div className={styles.orders}>
                <h2 className={styles.orders__header}>Активные заказы:</h2>
                {loading
                    ? ''
                    : data?.orders.length
                    ? data?.orders?.map(({ id, pizzasAmount, pizzasTotalPrice }) => (
                          <OrderItem
                              key={id}
                              id={id}
                              pizzasAmount={pizzasAmount}
                              pizzasTotalPrice={pizzasTotalPrice}
                          />
                      ))
                    : 'Пока нету активных заказов'}
            </div>
        </div>
    );
};

export default OrdersPage;
