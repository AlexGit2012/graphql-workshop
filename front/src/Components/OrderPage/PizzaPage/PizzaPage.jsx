import React, { useContext, useEffect, useState } from 'react';
import PizzaItem from './PizzaItem/PizzaItem';
import styles from './PizzaPage.module.css';
import { GET_ALL_PIZZAS } from '../../../queries/queries';
import { useQuery } from '@apollo/client';
import { FilterContext } from '../OrderPage';

const PizzaPage = () => {
    const { filter, sortByValue } = useContext(FilterContext);

    const { loading, data, error } = useQuery(GET_ALL_PIZZAS);

    const [sortedArr, setSortedArr] = useState([]);

    useEffect(() => {
        if (data?.pizzas) {
            const myArr = [...data?.pizzas];
            myArr.sort((firstPizza, secondPizza) => {
                if (sortByValue !== 'name') {
                    return firstPizza[sortByValue] - secondPizza[sortByValue];
                } else {
                    if (firstPizza[sortByValue] < secondPizza[sortByValue]) {
                        return -1;
                    }
                    if (firstPizza[sortByValue] > secondPizza[sortByValue]) {
                        return 1;
                    }
                    return 0;
                }
            });
            setSortedArr(
                myArr.filter((pizza) => {
                    if (filter === 'Все') return true;
                    else return pizza.filter.includes(filter);
                })
            );
        }
    }, [data?.pizzas, sortByValue, filter]);

    if (error) return <h3>Something went wrong...</h3>;

    return sortedArr?.length ? (
        <div className={styles.pizzaPage}>
            <h1 className={styles.pizzaPage__header}>Все пиццы</h1>
            <div className={styles.pizzaPage__items}>
                {loading ? (
                    'Loading...'
                ) : (
                    <>
                        {sortedArr.map(({ id, name, image }) => (
                            <PizzaItem key={id} id={id} name={name} image={image} />
                        ))}
                        <div className={styles.pizzaPage__emptyBlock}></div>
                        <div className={styles.pizzaPage__emptyBlock}></div>
                    </>
                )}
            </div>
        </div>
    ) : (
        <div className={styles.pizzaPage__noResults}>
            <h3>Нету вариантов по заданным критериям</h3>
        </div>
    );
};

export default PizzaPage;
