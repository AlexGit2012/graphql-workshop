import React, { useContext } from 'react';
import SearchOption from './SearchOption/SearchOption';
import SortBy from './SortBy/SortBy';
import styles from './SearchBar.module.css';
import { FilterContext } from '../OrderPage';

const SearchBar = () => {
    const { filter } = useContext(FilterContext);
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__options}>
                {['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'].map(
                    (option) => (
                        <SearchOption key={option} name={option} isActive={option === filter} />
                    )
                )}
            </div>
            <SortBy />
        </div>
    );
};

export default SearchBar;
