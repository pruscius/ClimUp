import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export default function NavBar () {
    return (
        <nav className={styles.nav}>
            <h4 className={styles.brandName}>ClimUp</h4>
            <div className={styles.searchBarDiv}>
                <SearchBar />
            </div>
            <div></div>
        </nav>
    )
}