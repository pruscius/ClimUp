import React from 'react';
import styles from './Card.module.css';
import { useDispatch } from 'react-redux';
import { detailCity, removeCity } from '../../common/redux/actions';

export default function Card({ name, minTemp, maxTemp, country, img, cityId }) {
    const dispatch = useDispatch();
    
    function handleClose(e) {
        e.stopPropagation();
        dispatch(removeCity(cityId));
    }

    function handleDetail() {
        dispatch(detailCity(cityId))
    }

    return (
        <div onClick={handleDetail} className={styles.card}>
                <p className={styles.close} onClick={e => handleClose(e)}>X</p>
                <h4 className={styles.name}>{name}, {country}</h4>
            <img className={styles.icon} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather"/>
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