import React from 'react';
import styles from './Card.module.css';
import { useDispatch } from 'react-redux';
import { removeCity } from '../../common/redux/actions';

export default function Card ({ name, minTemp, maxTemp, country, img, cityId }) {
    const dispatch = useDispatch();
    
    function handleClose() {
        dispatch(removeCity(cityId));
    }

    return (
        <div className={styles.card}>
                <p className={styles.close} onClick={handleClose}>X</p>
                <h5 className={styles.name}>{name}, {country}</h5>
            <img className={styles.icon} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="weather"/>
            <div className={styles.temps}>
                <div>
                    <p>Min</p>
                    <p>{minTemp}ºC</p>
                </div>
                <div>
                    <p>Max</p>
                    <p>{maxTemp}ºC</p>            
                </div>
            </div>
        </div>
    )
}