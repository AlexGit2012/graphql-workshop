import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyOrderPage.module.css';
import sadSmileIcon from '../../../assets/images/sad-smile.png';
import cartImage from '../../../assets/images/shopping-cart-colour 1.svg';

const EmptyOrderPage = () => {
    return (
        <div className={styles.empty__wrapper}>
            <div className={styles.empty}>
                <h3 className={styles.empty__header}>
                    Корзина пустая{' '}
                    <img className={styles.header__img} src={sadSmileIcon} alt="sad smile" />
                </h3>
                <span className={styles.empty__text}>
                    Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу,
                    перейди на главную страницу.
                </span>
                <img className={styles.empty__img} src={cartImage} alt="person with cart image" />
                <Link to="..">
                    <button className={styles.empty__button}>Вернуться назад</button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyOrderPage;
