import React from 'react';
import styles from './CartOrder.module.css';
import crossIcon from '../../../assets/images/cross.svg';
import minusIcon from '../../../assets/images/minus.svg';
import pizzaIcon from '../../../assets/images/pizza1.png';
import plusIcon from '../../../assets/images/plus.svg';

const CartOrder = () => {
    return (
        <div className={styles.order}>
            <div className={styles.order__description}>
                <img className={styles.description__image} src={pizzaIcon} alt="pizza" />
                <div className={styles.description__info}>
                    <span className={styles.info__name}>Сырный цыпленок</span> {/* __name__ */}
                    <span
                        className={styles.info__parameters}
                    >{`${'тонкое'} тесто, ${'26 см.'}`}</span>{' '}
                    {/* __settings__ */}
                </div>
            </div>
            <div className={styles.order__count}>
                <button className={styles.count__button}>
                    <img className={styles.button__plus} src={plusIcon} alt="plus" />
                </button>
                <span className={styles.count__text}>2</span> {/* __count__ */}
                <button className={styles.count__button}>
                    <img className={styles.button__minus} src={minusIcon} alt="minus" />
                </button>
            </div>
            <div className={styles.order__price}>
                <span>
                    550 <span className={styles.price__type}>₽</span>
                </span>
            </div>
            <button className={styles.order__cancel}>
                <img className={styles.cancel__image} src={crossIcon} alt="cross" />
            </button>
        </div>
    );
};

export default CartOrder;
