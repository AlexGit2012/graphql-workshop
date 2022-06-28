import React from 'react';
import classNames from 'classnames';
import utilsStyles from '../../../../utils/utilsStyles.module.css';
import styles from './SearchOption.module.css';

const SearchOption = ({ name, isActive = false }) => {
    const optionStyle = classNames({
        [styles.option]: true,
        [styles.option_active]: isActive,
        [utilsStyles.noSelect]: true,
    });

    return <div className={optionStyle}>{name}</div>;
};

export default SearchOption;
