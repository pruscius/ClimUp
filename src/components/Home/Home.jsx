import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import CardDetail from '../CardDetail/CardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from '../../common/redux/actions';
import { Oval } from 'react-loader-spinner';
import styles from './Home.module.css';

export default function Home () {
    const dispatch = useDispatch();
    const city = useSelector(state => state.city);

    useEffect(() => {
        dispatch(getCity('London'));
    }, [])

    return (
        <div >
            <NavBar />
            { Object.keys(city).length > 0 ?
                <div className={styles.cardContainer}>
                    <Card />
                    <CardDetail />
                </div>
                :
                <Oval color="#00BFFF" height={80} width={80} />
            }
        </div>
    )
}