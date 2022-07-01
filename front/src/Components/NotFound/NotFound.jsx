import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h3>Ошибка 404</h3>
            <div>Ой, тут нету пиццы (:</div>
        </div>
    );
};

export default NotFound;
