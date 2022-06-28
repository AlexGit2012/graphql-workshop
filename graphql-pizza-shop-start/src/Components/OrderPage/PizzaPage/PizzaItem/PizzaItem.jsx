import React, { useState } from 'react';
import PizzaSetting from './PizzaSetting/PizzaSetting';
import styles from './PizzaItem.module.css';
import pizza1 from '../../../../assets/images/pizza1.png';

const PizzaItem = () => {
    const [settingObj, setSetting] = useState({
        shape: 'тонкое',
        size: '26 см.',
    });

    return (
        <div className={styles.pizza}>
            <img className={styles.pizza__image} src={pizza1} alt="pizza" />
            <h4 className={styles.pizza__name}>Placeholder</h4> {/*  ___Pizzas-name___  */}
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
                <div className={styles.order__price}>от 395 ₽</div> {/*  ___Price___  */}
                <button className={styles.order__button}>+ Добавить</button>
            </div>
        </div>
    );
};

export default PizzaItem;
