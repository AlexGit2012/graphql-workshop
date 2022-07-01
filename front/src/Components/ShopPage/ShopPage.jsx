import React, { useState } from 'react';
import PizzaPage from './PizzaPage/PizzaPage';
import SearchBar from './SearchBar/SearchBar';
import styles from './ShopPage.module.css';

export const FilterContext = React.createContext({});

const ShopPage = () => {
    const [filter, setFilter] = useState('Все');
    const [sortByValue, setSortByValue] = useState('popularity');
    const [isDescentOrder, setDescentOrder] = useState(true);
    return (
        <div className={styles.orderPage}>
            <FilterContext.Provider
                value={{
                    filter,
                    setFilter,
                    sortByValue,
                    setSortByValue,
                    isDescentOrder,
                    setDescentOrder,
                }}
            >
                <SearchBar />
                <PizzaPage />
            </FilterContext.Provider>
        </div>
    );
};

export default ShopPage;
