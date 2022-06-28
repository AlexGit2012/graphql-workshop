import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logoIcon from '../../../assets/images/pizzaLogo.png';

const Logo = () => {
    return (
        <Link to="/" className={styles.logo__wrapper}>
            <div className={styles.logo__image}>
                <img src={logoIcon} alt="logo" />
            </div>
            <div className={styles.logo__text}>
                <div className={styles.text__bold}>REACT PIZZA</div>
                <div className={styles.text__simple}>самая вкусная пицца во вселенной</div>
            </div>
        </Link>
    );
};

export default Logo;
