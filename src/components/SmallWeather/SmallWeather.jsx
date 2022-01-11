import React from "react";
import styles from './SmallWeather.module.css';

export default function SmallWeather({ day, minTemp, maxTemp, icon }) {
    return (
        <div className={styles.container}>
            <h5 className={styles}>{day}</h5>
            <img className={styles.icon} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon"/>
            <div className={styles.tempsContainer}>
                <div className={styles.temps}>
                    <h5>{minTemp}</h5>
                    <h6 className={styles.degrees}>º C</h6>
                </div>
                <span className={styles.slash}>/</span>
                <div className={styles.temps}>
                    <h5>{maxTemp}</h5>
                    <h6 className={styles.degrees}>º C</h6>
                </div>
            </div>
        </div>
    )
}