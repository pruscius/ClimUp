import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const GET_CITY = "GET_CITY";
const REMOVE_CITY = "REMOVE_CITY";

export function getCity(city) {
    return async function (dispatch) {
        const apiCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        console.log(apiCity.data);
        dispatch({
            type: GET_CITY,
            payload: apiCity.data
        })
    }
}

export function removeCity(cityId) {
    return {
        type: REMOVE_CITY,
        payload: cityId
    }
}