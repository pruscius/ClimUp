import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar () {
    return (
        <nav className={styles.nav}>
            <Link className={styles.link} to="/">
                <h4 className={styles.brandName}>ClimUp</h4>
            </Link>
            <div className={styles.searchBarDiv}>
                <SearchBar />
            </div>
            <div></div>
        </nav>
    )
}