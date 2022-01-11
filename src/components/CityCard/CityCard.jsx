import React from 'react';
import styles from './CityCard.module.css';
import { useDispatch } from 'react-redux';
import { detailCity, removeCity } from '../../common/redux/actions';

export default function CityCard({ name, minTemp, maxTemp, country, img, cityId }) {
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
                <h6 className={styles.close} onClick={e => handleClose(e)}>X</h6>
                <h5 className={styles.name}>{name}, {country}</h5>
            <div className={styles.temps}>
                <div>
                    <h6 className={styles.minMax}>Min</h6>
                    <h6 className={styles.values}>{minTemp}ºC</h6>
                </div>
                <div>
                    <h6 className={styles.minMax}>Max</h6>
                    <h6 className={styles.values}>{maxTemp}ºC</h6>            
                </div>
            </div>
        </div>
    )
}