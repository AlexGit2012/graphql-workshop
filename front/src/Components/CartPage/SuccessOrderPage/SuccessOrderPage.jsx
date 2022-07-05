import React from 'react';
import styles from './SuccessOrderPage.module.css';

const SuccessOrderPage = () => {
    return (
        <div className={styles.success}>
            <h3>Ваш заказ передан на обработку. Ожидайте, с вами свяжется оператор</h3>
        </div>
    );
};

export default SuccessOrderPage;
