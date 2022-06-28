import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import utilsStyles from '../../../../utils/utilsStyles.module.css';
import styles from './SortBy.module.css';
import triangleIcon from '../../../../assets/images/triangle.svg';

const SortBy = ({ sortName, setSortName }) => {
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
                <span className={styles.sortBy__filter}>{sortName || 'Placeholder1'}</span>
            </span>
            {isMenuVisible && (
                <div className={styles.sortBy__menu}>
                    {['Placeholder1', 'Placeholder2'].map((name) => (
                        <div key={name} className={styles.sortBy__menuItem}>
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortBy;
