import React, { useCallback, useContext } from 'react';
import classNames from 'classnames';
import utilsStyles from '../../../../utils/utilsStyles.module.css';
import styles from './SearchOption.module.css';
import { FilterContext } from '../../OrderPage';

const SearchOption = ({ name, isActive = false }) => {
    const { setFilter } = useContext(FilterContext);

    const optionStyle = classNames({
        [styles.option]: true,
        [styles.option_active]: isActive,
        [utilsStyles.noSelect]: true,
    });

    const setFilterName = useCallback(() => {
        setFilter(name);
    }, [setFilter, name]);

    return (
        <div className={optionStyle} onClick={setFilterName}>
            {name}
        </div>
    );
};

export default SearchOption;
