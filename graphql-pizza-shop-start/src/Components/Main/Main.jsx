import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../CartPage/CartPage';
import OrderPage from '../OrderPage/OrderPage';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<OrderPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
};

export default Main;
