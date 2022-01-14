import React from 'react';
import CityCard from '../CityCard/CityCard';
import { useSelector } from 'react-redux';
import styles from './CityCards.module.css';

export default function CityCards () {
    const cities = useSelector(state => state.cities);

    return (
        <div className={styles.cards}>
            {cities.length ? cities.map(c => 
                <CityCard 
                    cityId={c.id}
                    key={c.id}
                    name={c.name}    
                    country={c.sys.country}
                    minTemp={Math.round(c.main.temp_min)}
                    maxTemp={Math.round(c.main.temp_max)}
                    img={c.weather[0].icon}
                    lat={c.coord.lat}
                    lon={c.coord.lon}
                />
            )
            : null
            }
        </div>
    )
}