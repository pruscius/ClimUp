import React from 'react';
import { useSelector } from 'react-redux';
import SmallWeather from '../SmallWeather/SmallWeather';
import styles from './CardDetail.module.css';

export default function CardDetail () {
    const city = useSelector(state=>state.city)
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h5 className={styles.forecast}>Forecast</h5>
                <div className={styles.todayContainer}>
                    <div className={styles.firstRow}>
                        <div className={styles.todayImg}>
                            <h5>Today</h5>
                            <img 
                                className={styles.icon} 
                                src={`http://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`} 
                                alt="weather"
                            />
                        </div>
                        <div className={styles.maxMin}>
                            <div className={styles.temps}>
                                <h5>{Math.round(city.list[0].main.temp_max)}</h5>
                                <h6 className={styles.degrees}>º C</h6>
                            </div>
                            <div className={styles.temps}>
                                <h5>{Math.round(city.list[0].main.temp_min)}</h5>
                                <h6 className={styles.degrees}>º C</h6>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.altDataContainer}>
                            <h6>Wind</h6>
                            <h6 className={styles.values}>{Math.round(city.list[0].wind.speed)}km/h</h6>
                        </div>
                        <div className={styles.altDataContainer}>
                            <h6>Humidity</h6>
                            <h6 className={styles.values}>{city.list[0].main.humidity}%</h6>
                        </div>
                    </div>
                    <div className={styles.thirdRow}>
                        <div className={styles.altDataContainer}>
                            <h6>Visibility</h6>
                            <h6 className={styles.values}>{city.list[0].visibility / 1000}km</h6>
                        </div>
                        <div className={styles.altDataContainer}>
                            <h6>Pressure</h6>
                            <h6 className={styles.values}>{city.list[0].main.pressure}hPa</h6>
                        </div>
                    </div>
                </div>

                <div className={styles.daysContainer}>
                    {   
                        city.list.map((time, index) => {
                            let date = new Date(time.dt_txt)
                            const day = new Date(date).toLocaleString('en-us', {weekday: 'short'});
                            if (date.getUTCHours() === 12) {
                                return (
                                    <SmallWeather 
                                        key={index}
                                        day={day}
                                        minTemp={Math.round(time.main.temp_min)}
                                        maxTemp={Math.round(time.main.temp_max)}
                                        icon={time.weather[0].icon}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>    
        </div>
    )
}