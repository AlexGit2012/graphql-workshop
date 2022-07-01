import React from 'react';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header}>
                <Logo />
                <Link to="/orders">
                    <button className={styles.header__link}>Активные заказы</button>
                </Link>
                <Cart />
            </div>
        </div>
    );
};

export default Header;
