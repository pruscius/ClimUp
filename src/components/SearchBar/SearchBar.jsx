import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from '../../common/redux/actions'
import styles from './SearchBar.module.css';

export default function SearchBar () {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(getCity(city));
        setCity('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                className={styles.input}
                type="text" 
                placeholder="Search for cities..."
                onChange={e => handleChange(e)}
                value={city}
            />
            <input
                className={styles.btn}
                type="submit"
                value="Search"
            />
        </form>
    )
}