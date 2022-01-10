import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import { useDispatch } from 'react-redux';
import { getCity } from '../../common/redux/actions';

export default function Home () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCity('London'));
    }, [])

    return (
        <div>
            <NavBar />
            {/* <CardDetail /> */}
            <Cards />
        </div>
    )
}