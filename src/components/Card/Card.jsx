import React from 'react';
import styles from './Card.module.css';
import { useSelector } from 'react-redux';

export default function Card() {
    const city = useSelector(state => state.city);

    let date;

    if (Object.keys(city).length > 0 ) {
        const today = new Date(city.current.dt * 1000);        
        const dayNumber = new Date(today).getDate();
        const day = new Date(today).toLocaleString('en-us', {weekday: 'short'});
        const month = new Date(today).toLocaleString('en-us', {month: 'short'});
        date = `${day}, ${dayNumber} ${month}`;
    }

    let sphere = '\u25CF';

    return (
        <div className={styles.container}>
           
            <div className={styles.card}>
                <div className={styles.dateIcon}>
                    <img 
                        className={styles.icon} 
                        src={`http://openweathermap.org/img/wn/${city.daily[0].weather[0].icon}@2x.png`} 
                        alt="weather"
                    />
                    <div className={styles.dateContainer}>
                        <h2 className={styles.today}>Today</h2>
                        <h6 className={styles.date}>{date}</h6>
                    </div>
                </div>
                <div className={styles.presentTempCont}>
                    <h5 className={styles.presentTemp}>{Math.round(city.current.temp)}</h5>
                    <span className={styles.degrees}>º C</span>
                </div>
                <h5 className={styles.name}>{city.name}, {city.country}</h5>
                <h6 className={styles.feelsLike}>Feels Like {Math.round(city.current.feels_like)} {sphere} {city.current.weather[0].main}</h6>
            </div>         
        </div>       
    )
}
         