import React from 'react';
import { useSelector } from 'react-redux';
import SmallWeather from '../SmallWeather/SmallWeather';
import styles from './CardDetail.module.css';

export default function CardDetail () {
    const city = useSelector(state=>state.city)
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h5 className={styles.forecast}>Next Week</h5>
                <div className={styles.todayContainer}>
                    <div className={styles.firstRow}>
                        <div className={styles.todayImg}>
                            <h5>Today</h5>
                            <img 
                                className={styles.icon} 
                                src={`http://openweathermap.org/img/wn/${city.daily[0].weather[0].icon}@2x.png`} 
                                alt="weather"
                            />
                        </div>
                        <div className={styles.maxMin}>
                            <div className={styles.temps}>
                                <h5>{Math.round(city.daily[0].temp.min)}</h5>
                                <h6 className={styles.degrees}>º C</h6>
                            </div>
                            <div className={styles.temps}>
                                <h5>{Math.round(city.daily[0].temp.max)}</h5>
                                <h6 className={styles.degrees}>º C</h6>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.altDataContainer}>
                            <h6>Wind</h6>
                            <h6 className={styles.values}>{Math.round(city.daily[0].wind_speed)}km/h</h6>
                        </div>
                        <div className={styles.altDataContainer}>
                            <h6>Humidity</h6>
                            <h6 className={styles.values}>{city.daily[0].humidity}%</h6>
                        </div>
                    </div>
                    <div className={styles.thirdRow}>
                        <div className={styles.altDataContainer}>
                            <h6>Visibility</h6>
                            <h6 className={styles.values}>{city.current.visibility / 1000}km</h6>
                        </div>
                        <div className={styles.altDataContainer}>
                            <h6>Pressure</h6>
                            <h6 className={styles.values}>{city.daily[0].pressure}hPa</h6>
                        </div>
                    </div>
                </div>

                <div className={styles.daysContainer}>
                    {   
                        city.daily.map((day, index) => {
                            if (index !== 0) {
                                let date = new Date(day.dt * 1000)
                                const weekDay = new Date(date).toLocaleString('en-us', {weekday: 'short'});
                                return (
                                    <SmallWeather 
                                        key={index}
                                        day={weekDay}
                                        minTemp={Math.round(day.temp.min)}
                                        maxTemp={Math.round(day.temp.max)}
                                        icon={day.weather[0].icon}
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