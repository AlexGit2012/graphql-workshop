import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import cartIcon from '../../../assets/images/shopping-cart.svg';
import { localOrderState } from '../../../apollo-client/apollo-client';
import { useReactiveVar } from '@apollo/client';

const Cart = () => {
    const { pizzasTotalPrice, pizzasAmount } = useReactiveVar(localOrderState);

    return (
        <Link to="/cart">
            <div className={styles.cart}>
                <div className={styles.cart__money}>
                    {pizzasTotalPrice}
                    <span className={styles.cart__type}>₽</span>
                </div>
                <div className={styles.cart__items}>
                    <img className={styles.cart__image} src={cartIcon} alt="cart" />
                    <span className={styles.cart__count}>{pizzasAmount}</span>
                </div>
            </div>
        </Link>
    );
};

export default Cart;
