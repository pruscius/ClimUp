import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards () {
    const cities = useSelector(state => state.cities);

    return (
        <div className={styles.cards}>
            {cities.length ? cities.map(c => 
                <Card 
                    cityId={c.id}
                    key={c.id}
                    name={c.name}    
                    country={c.sys.country}
                    minTemp={Math.round(c.main.temp_min)}
                    maxTemp={Math.round(c.main.temp_max)}
                    img={c.weather[0].icon}
                />
            )
            : null
            }
        </div>
    )
}