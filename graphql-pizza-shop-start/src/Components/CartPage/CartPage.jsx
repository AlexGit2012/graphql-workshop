import React from 'react';
import { Link } from 'react-router-dom';
import CartOrder from './CartOrder/CartOrder';
import EmptyOrderPage from './EmptyOrderPage/EmptyOrderPage';
import styles from './CartPage.module.css';
import arrowIcon from '../../assets/images/arrow.svg';
import cartIcon from '../../assets/images/iconfinder_shopping-cart.svg';
import trashIcon from '../../assets/images/trash.svg';

const CartPage = () => {
    const order = [];

    return order.length ? (
        <div className={styles.cart__wrapper}>
            <div className={styles.cart}>
                <div className={styles.cart__info}>
                    <div className={styles.header}>
                        <img className={styles.header__image} src={cartIcon} />
                        <h2 className={styles.header__text}>Корзина</h2>
                    </div>
                    <button className={styles.info__clear}>
                        <img className={styles.clear__image} src={trashIcon} />
                        <span className={styles.clear__text}>Очистить корзинку</span>
                    </button>
                </div>
                <div className={styles.cart__orders}>
                    <CartOrder />
                    <CartOrder />
                    <CartOrder />
                </div>
                <div className={styles.cart__purchase}>
                    <div className={styles.purchase__about}>
                        <div className={styles.about__count}>
                            Всего пицц: <span className={styles.count__number}>3 шт.</span>
                        </div>
                        <div className={styles.about__price}>
                            Сумма заказа:
                            <span className={styles.price__number}>
                                900 <span className={styles.price__type}>₽</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.purchase__buttons}>
                        <Link to="..">
                            <button className={styles.buttons__back}>
                                <img className={styles.back__arrow} src={arrowIcon} alt="arrow" />
                                Вернуться назад
                            </button>
                        </Link>
                        <button className={styles.buttons__submit}>Оплатить сейчас</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <EmptyOrderPage />
    );
};

export default CartPage;
