import React, { useCallback, useContext, useState } from 'react';
import classNames from 'classnames';
import utilsStyles from '../../../../utils/utilsStyles.module.css';
import styles from './SortBy.module.css';
import triangleIcon from '../../../../assets/images/triangle.svg';
import { FilterContext } from '../../OrderPage';

const dictionarySortBy = [
    { name: 'popularity', value: 'Популярности' },
    { name: 'name', value: 'по алфавиту' },
    { name: 'minPrice', value: 'по цене' },
];

const SortBy = () => {
    const { sortByValue, setSortByValue } = useContext(FilterContext);

    const [isMenuVisible, setVisible] = useState(false);

    const triangleStyle = classNames({
        [styles.sortBy__image]: true,
        [styles.sortBy__image_active]: isMenuVisible,
    });

    const sortByStyle = classNames({ [styles.sortBy]: true, [utilsStyles.noSelect]: true });

    const setVisibleCB = useCallback(() => {
        setVisible(!isMenuVisible);
    }, [isMenuVisible]);

    const closeMenu = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    const createSortByHandler = (name) => () => {
        setSortByValue(name);
        closeMenu();
    };

    return (
        <div className={sortByStyle} onBlur={closeMenu} tabIndex="0">
            <img
                className={triangleStyle}
                src={triangleIcon}
                alt="triangle"
                onClick={setVisibleCB}
            />
            <span className={styles.sortBy__text} onClick={setVisibleCB}>
                Сортировка по:
                <span className={styles.sortBy__filter}>
                    {dictionarySortBy.find((element) => element.name === sortByValue).value}
                </span>
            </span>
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
