import React from 'react';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header}>
                <Logo />
                <Cart />
            </div>
        </div>
    );
};

export default Header;
