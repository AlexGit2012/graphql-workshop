import React, { useCallback, useContext, useState } from 'react';
import classNames from 'classnames';
import utilsStyles from '../../../../utils/utilsStyles.module.css';
import styles from './SortBy.module.css';
import triangleIcon from '../../../../assets/images/triangle.svg';
import { FilterContext } from '../../ShopPage';

const dictionarySortBy = [
    { name: 'popularity', value: 'популярности' },
    { name: 'name', value: 'по алфавиту' },
    { name: 'minPrice', value: 'по цене' },
];

const SortBy = () => {
    const { sortByValue, setSortByValue, isDescentOrder, setDescentOrder } =
        useContext(FilterContext);

    const [isMenuVisible, setVisible] = useState(false);

    const triangleStyle = classNames({
        [styles.sortBy__image]: true,
        [styles.sortBy__image_active]: isDescentOrder,
    });

    const sortByStyle = classNames({ [styles.sortBy]: true, [utilsStyles.noSelect]: true });

    const setVisibleCB = useCallback(() => {
        setVisible(!isMenuVisible);
    }, [isMenuVisible]);

    const setDescentOrderCB = useCallback(() => {
        setDescentOrder(!isDescentOrder);
    }, [isDescentOrder, setDescentOrder]);

    const closeMenu = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const createSortByHandler = (name) => () => {
        setSortByValue(name);
        closeMenu();
    };

    return (
        <div className={sortByStyle}>
            <img
                className={triangleStyle}
                src={triangleIcon}
                alt="triangle"
                onClick={setDescentOrderCB}
            />
            <div className={styles.sortBy__text} onClick={setVisibleCB}>
                Сортировка по:
                <div className={styles.sortBy__filter} onBlur={closeMenu}>
                    {dictionarySortBy.find((element) => element.name === sortByValue).value}
                </div>
            </div>
            {isMenuVisible && (
                <div className={styles.sortBy__menu}>
                    {dictionarySortBy.map(({ name, value }) => (
                        <div
                            key={name}
                            className={styles.sortBy__menuItem}
                            onClick={createSortByHandler(name)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortBy;
