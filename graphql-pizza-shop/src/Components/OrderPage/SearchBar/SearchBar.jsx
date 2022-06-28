import React from 'react';
import SearchOption from './SearchOption/SearchOption';
import SortBy from './SortBy/SortBy';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__options}>
                <SearchOption name="Все" isActive={true} />
                <SearchOption name="Мясной" />
                <SearchOption name="Вегетарианские" />
            </div>
            <SortBy />
        </div>
    );
};

export default SearchBar;
