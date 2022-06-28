import React from 'react';
import PizzaItem from './PizzaItem/PizzaItem';
import styles from './PizzaPage.module.css';

const PizzaPage = () => {
    return (
        <div className={styles.pizzaPage}>
            <h1 className={styles.pizzaPage__header}>Все пиццы</h1>
            <div className={styles.pizzaPage__items}>
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
                <PizzaItem />
            </div>
        </div>
    );
};

export default PizzaPage;
