import React, { useCallback, useMemo, useState } from 'react';
import PizzaSetting from './PizzaSetting/PizzaSetting';
import styles from './PizzaItem.module.css';
import { useQuery, useReactiveVar } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { GET_PIZZA, GET_PIZZA_PRICE } from '../../../../queries/queries';
import { localOrderState } from '../../../../apollo-client/apollo-client';
import { calculateOrder, priceShapeDictionary, priceSizeDictionary } from '../../../../utils/utils';

const PizzaItem = ({ name, image, id }) => {
    const [settingObj, setSetting] = useState({
        shape: 'традиционное',
        size: '26 см.',
    });

    const { orderPizzas } = useReactiveVar(localOrderState);

    const currentPizzaCount = useMemo(() => {
        if (!orderPizzas.length) return 0;
        return orderPizzas.find(
            (pizzaInOrder) =>
                pizzaInOrder.pizzaID === id &&
                pizzaInOrder.currentShape === settingObj.shape &&
                pizzaInOrder.currentSize === settingObj.size
        )?.currentAmount;
    }, [orderPizzas, id, settingObj.shape, settingObj.size]);

    const { loading, data } = useQuery(GET_PIZZA, { variables: { id } });

    const priceFieldBuilder = useCallback(
        (pizzaData) => {
            return pizzaData
                ? pizzaData?.pizza?.price[priceShapeDictionary[settingObj.shape]][
                      priceSizeDictionary[settingObj.size]
                  ]
                : '';
        },
        [settingObj.shape, settingObj.size]
    );

    const addToCart = useCallback(() => {
        const { orderPizzas } = localOrderState();
        let newOrderPizzas = [...orderPizzas];
        const pizzasCurrentPrice = priceFieldBuilder(data);

        const pizzaFromOrder = orderPizzas.find(
            (pizza) =>
                pizza.currentShape === settingObj.shape &&
                pizza.currentSize === settingObj.size &&
                pizza.pizzaID === id
        );

        if (pizzaFromOrder) {
            pizzaFromOrder.currentAmount++;
        } else {
            newOrderPizzas = [
                ...orderPizzas,
                {
                    id: uuidv4(),
                    currentPrice: pizzasCurrentPrice,
                    currentShape: settingObj.shape,
                    currentSize: settingObj.size,
                    currentAmount: 1,
                    pizzaID: id,
                },
            ];
        }
        localOrderState(calculateOrder(newOrderPizzas));
    }, [data, priceFieldBuilder, settingObj.size, settingObj.shape, id]);

    return (
        <div className={styles.pizza}>
            <img className={styles.pizza__image} src={image} alt="pizza" />
            <h4 className={styles.pizza__name}>{name}</h4>
            <div className={styles.pizza__settings}>
                {[
                    { name: 'тонкое', setting: 'shape' },
                    { name: 'традиционное', setting: 'shape' },
                    { name: '26 см.', setting: 'size' },
                    { name: '30 см.', setting: 'size' },
                    { name: '40 см.', setting: 'size' },
                ].map(({ name, setting }, index) => (
                    <PizzaSetting
                        name={name}
                        setting={setting}
                        index={index}
                        key={name}
                        isActive={settingObj[setting] === name}
                        settingObj={settingObj}
                        setSetting={setSetting}
                    />
                ))}
            </div>
            <div className={styles.pizza__order}>
                <div className={styles.order__price}>
                    {loading ? '' : `${priceFieldBuilder(data)} ₽`}
                </div>{' '}
                <button className={styles.order__button} onClick={addToCart}>
                    + Добавить
                    {currentPizzaCount > 0 && (
                        <div className={styles.order__count}>{currentPizzaCount}</div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PizzaItem;
