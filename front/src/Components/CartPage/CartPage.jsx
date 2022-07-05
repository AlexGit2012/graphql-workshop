import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartOrder from './CartOrder/CartOrder';
import EmptyOrderPage from './EmptyOrderPage/EmptyOrderPage';
import styles from './CartPage.module.css';
import arrowIcon from '../../assets/images/arrow.svg';
import cartIcon from '../../assets/images/iconfinder_shopping-cart.svg';
import trashIcon from '../../assets/images/trash.svg';
import { useMutation, useReactiveVar } from '@apollo/client';
import { initialStorageValue, localOrderState } from '../../apollo-client/apollo-client';
import { calculateOrder } from '../../utils/utils';
import { ADD_ORDER } from '../../mutations/mutations';
import SuccessOrderPage from './SuccessOrderPage/SuccessOrderPage';
import { GET_ALL_ORDERS } from '../../queries/queries';

const CartPage = () => {
    const [isOrderSent, setOrderStatus] = useState(false);
    const { orderPizzas, pizzasTotalPrice, pizzasAmount } = useReactiveVar(localOrderState);

    const [sendOrder, { error }] = useMutation(ADD_ORDER, {
        update(cache, { data: { addOrder } }) {
            const allOrders = cache.readQuery({ query: GET_ALL_ORDERS }) || { orders: [] };
            console.log('allOrders', allOrders);
            console.log('addOrder', addOrder);
            cache.writeQuery({
                query: GET_ALL_ORDERS,
                data: { orders: [addOrder, ...allOrders.orders] },
            });
        },
    });

    const sendOrderCB = async () => {
        console.log('sendOrderCB -> orderPizzas', orderPizzas);
        await sendOrder({
            variables: { orderPizzas, pizzasTotalPrice, pizzasAmount },
            optimisticResponse: {
                __typename: 'Mutation',
                addOrder: {
                    __typename: 'Order',
                    id: 'temporalID',
                    orderPizzas,
                    pizzasTotalPrice,
                    pizzasAmount,
                },
            },
        });
        setOrderStatus(true);
        localOrderState(initialStorageValue);
    };

    const clearCart = () => {
        localOrderState(initialStorageValue);
    };

    const deleteItem = (deletePizzaInOrderID) => {
        const { orderPizzas } = localOrderState();
        const newOrderPizzas = orderPizzas.filter(
            (pizzaInOrder) => pizzaInOrder.id !== deletePizzaInOrderID
        );
        localOrderState(calculateOrder(newOrderPizzas));
    };

    const changeAmount = (targetPizzaInOrderID, value) => {
        const { orderPizzas } = localOrderState();
        const newOrderPizzas = orderPizzas.find(
            (pizzaInOrder) => pizzaInOrder.id === targetPizzaInOrderID
        );
        if (!(newOrderPizzas.currentAmount + value)) {
            deleteItem(targetPizzaInOrderID);
        } else {
            newOrderPizzas.currentAmount = newOrderPizzas.currentAmount + value;
        }
        const { orderPizzas: updatedOrderPizzas } = localOrderState();
        localOrderState(calculateOrder(updatedOrderPizzas));
    };

    if (error) return 'Something went wrong...';

    if (isOrderSent) return <SuccessOrderPage />;

    return pizzasTotalPrice ? (
        <div className={styles.cart__wrapper}>
            <div className={styles.cart}>
                <div className={styles.cart__info}>
                    <div className={styles.header}>
                        <img className={styles.header__image} src={cartIcon} alt="cart" />
                        <h2 className={styles.header__text}>Корзина</h2>
                    </div>
                    <button className={styles.info__clear} onClick={clearCart}>
                        <img className={styles.clear__image} src={trashIcon} alt="trash" />
                        <span className={styles.clear__text}>Очистить корзинку</span>
                    </button>
                </div>
                <div className={styles.cart__orders}>
                    {orderPizzas.map(
                        ({
                            id,
                            currentPrice,
                            currentShape,
                            currentSize,
                            currentAmount,
                            pizzaID,
                        }) => (
                            <CartOrder
                                key={id}
                                id={id}
                                currentPrice={currentPrice}
                                currentShape={currentShape}
                                currentSize={currentSize}
                                currentAmount={currentAmount}
                                pizzaID={pizzaID}
                                deleteItem={deleteItem}
                                changeAmount={changeAmount}
                            />
                        )
                    )}
                </div>
                <div className={styles.cart__purchase}>
                    <div className={styles.purchase__about}>
                        <div className={styles.about__count}>
                            Всего пицц:
                            <span className={styles.count__number}>{pizzasAmount} шт.</span>
                        </div>
                        <div className={styles.about__price}>
                            Сумма заказа:
                            <span className={styles.price__number}>
                                {pizzasTotalPrice} <span className={styles.price__type}>₽</span>
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
                        <button className={styles.buttons__submit} onClick={sendOrderCB}>
                            Оплатить сейчас
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <EmptyOrderPage />
    );
};

export default CartPage;
