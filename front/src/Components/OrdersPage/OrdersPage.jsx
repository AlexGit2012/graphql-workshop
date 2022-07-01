import React from 'react';
import styles from './OrdersPage.module.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_ORDERS } from '../../queries/queries';
import OrderItem from './OrderItem/OrderItem';

const OrdersPage = () => {
    const { loading, data } = useQuery(GET_ALL_ORDERS);

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
