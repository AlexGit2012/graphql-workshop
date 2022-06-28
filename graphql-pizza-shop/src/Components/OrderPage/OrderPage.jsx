import React from 'react';
import PizzaPage from './PizzaPage/PizzaPage';
import SearchBar from './SearchBar/SearchBar';
import styles from './OrderPage.module.css';

const OrderPage = () => {
    return (
        <div className={styles.orderPage}>
            <SearchBar />
            <PizzaPage />
        </div>
    );
};

export default OrderPage;
