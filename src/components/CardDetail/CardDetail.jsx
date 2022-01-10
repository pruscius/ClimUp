import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CardDetail.module.css';

export default function CardDetail() {
    const cityDetail = useSelector(state => state.cityDetail);
    
    return (
        <>
        { 
            Object.keys(cityDetail).length > 0 ? 
            <div className={styles.cardDetail}>
                <h3>{cityDetail.city.name}, {cityDetail.city.country}</h3>
                <img 
                    className={styles.icon} src={`http://openweathermap.org/img/wn/${cityDetail.list[0].weather[0].icon}@2x.png`} 
                    alt="weather"
                />
                <div className={styles.temps}>
                    <div>
                        <p>Min</p>
                        <p>{cityDetail.list[0].main.temp_min}ºC</p>
                    </div>
                    <div>
                        <p>Max</p>
                        <p>{cityDetail.list[0].main.temp_max}ºC</p>            
                    </div>
                </div>
            </div>
            : null
        }
        </>
    )
}