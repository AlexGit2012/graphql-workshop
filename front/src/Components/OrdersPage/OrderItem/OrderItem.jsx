import React from 'react';
import styles from './OrderItem.module.css';

const OrderItem = ({ id, pizzasAmount, pizzasTotalPrice }) => {
    return (
        <div className={styles.order}>
            <div className={styles.order__field}>
                <span className={styles.bold}>Номер заказа - </span>
                {id}
            </div>
            <div className={styles.order__field}>
                <span className={styles.bold}>Количество в заказе - </span>
                {pizzasAmount} шт.
            </div>
            <div className={styles.order__field}>
                <span className={styles.bold}>Итоговая цена - </span>
                {pizzasTotalPrice} ₽
            </div>
        </div>
    );
};

export default OrderItem;
