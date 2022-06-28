import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import cartIcon from '../../../assets/images/shopping-cart.svg';

const Cart = () => {
    return (
        <Link to="/cart">
            <div className={styles.cart}>
                <div className={styles.cart__money}>
                    500<span className={styles.cart__type}>₽</span>
                </div>
                <div className={styles.cart__items}>
                    <img className={styles.cart__image} src={cartIcon} alt="cart" />
                    <span className={styles.cart__count}>3</span>
                </div>
            </div>
        </Link>
    );
};

export default Cart;
