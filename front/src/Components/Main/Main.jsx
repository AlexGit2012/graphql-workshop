import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../CartPage/CartPage';
import ShopPage from '../ShopPage/ShopPage';
import styles from './Main.module.css';
import NotFound from '../NotFound/NotFound';
import OrdersPage from '../OrdersPage/OrdersPage';

const Main = () => {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Main;
