import React, { useState } from 'react';
import PizzaPage from './PizzaPage/PizzaPage';
import SearchBar from './SearchBar/SearchBar';
import styles from './OrderPage.module.css';

export const FilterContext = React.createContext({});

const OrderPage = () => {
    const [filter, setFilter] = useState('Все');
    const [sortByValue, setSortByValue] = useState('popularity');
    return (
        <div className={styles.orderPage}>
            <FilterContext.Provider value={{ filter, setFilter, sortByValue, setSortByValue }}>
                <SearchBar />
                <PizzaPage />
            </FilterContext.Provider>
        </div>
    );
};

export default OrderPage;
