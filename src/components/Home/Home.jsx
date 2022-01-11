import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import CityCards from '../CityCards/CityCards';
import Card from '../Card/Card';
import CardDetail from '../CardDetail/CardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { detailCity, getCity } from '../../common/redux/actions';
import { Oval } from 'react-loader-spinner';
import styles from './Home.module.css';

export default function Home () {
    const dispatch = useDispatch();
    const city = useSelector(state => state.city);
    const cities = useSelector(state=>state.cities);
    const displayMessage = useSelector(state=>state.displayMessage);

    useEffect(() => {
        dispatch(getCity('London'));
        dispatch(detailCity('2643743'));
    }, [])

    return (
        <div className={styles.container}>
            <NavBar />
            { displayMessage ?
                <h4 className={styles.message}>Search for your city!</h4>
            : Object.keys(city).length > 0 && cities.length > 0 ?
                <div className={styles.cardContainer}>
                    <div><CityCards /></div>
                    <div className={styles.card}><Card /></div>
                    <div><CardDetail /></div>
                </div>
                :
                <div className={styles.loader}>
                    <Oval color="#00BFFF" height={80} width={80} />
                </div>
            }
        </div>
    )
}