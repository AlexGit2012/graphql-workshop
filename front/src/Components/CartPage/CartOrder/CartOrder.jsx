import React, { useCallback } from 'react';
import styles from './CartOrder.module.css';
import crossIcon from '../../../assets/images/cross.svg';
import minusIcon from '../../../assets/images/minus.svg';
import plusIcon from '../../../assets/images/plus.svg';
import { useQuery } from '@apollo/client';
import { GET_PIZZA } from '../../../queries/queries';

const CartOrder = ({
    currentPrice,
    currentShape,
    currentSize,
    currentAmount,
    pizzaID,
    id,
    deleteItem,
    changeAmount,
}) => {
    const { loading, data } = useQuery(GET_PIZZA, { variables: { id: pizzaID } });

    const deleteItemCB = useCallback(() => {
        deleteItem(id);
    }, [deleteItem, id]);

    const increaseAmountCB = useCallback(() => {
        changeAmount(id, 1);
    }, [changeAmount]);

    const decreaseAmountCB = useCallback(() => {
        changeAmount(id, -1);
    }, [changeAmount]);

    return (
        <div className={styles.order}>
            <div className={styles.order__description}>
                <img
                    className={styles.description__image}
                    src={loading ? '' : data.pizza.image}
                    alt="pizza"
                />
                <div className={styles.description__info}>
                    <span className={styles.info__name}>{loading ? '' : data.pizza.name}</span>
                    <span
                        className={styles.info__parameters}
                    >{`${currentShape} тесто, ${currentSize}`}</span>
                </div>
            </div>
            <div className={styles.order__count}>
                <button className={styles.count__button} onClick={increaseAmountCB}>
                    <img className={styles.button__plus} src={plusIcon} alt="plus" />
                </button>
                <span className={styles.count__text}>{currentAmount}</span>
                <button className={styles.count__button} onClick={decreaseAmountCB}>
                    <img className={styles.button__minus} src={minusIcon} alt="minus" />
                </button>
            </div>
            <div className={styles.order__price}>
                <span>
                    {currentPrice * currentAmount} <span className={styles.price__type}>₽</span>
                </span>
            </div>
            <button className={styles.order__cancel} onClick={deleteItemCB}>
                <img className={styles.cancel__image} src={crossIcon} alt="cross" />
            </button>
        </div>
    );
};

export default CartOrder;
