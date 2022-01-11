import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const GET_CITY = "GET_CITY";

export function getCity(city) {
    return async function (dispatch) {
        try {
            const apiCity = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            console.log(apiCity.data);
            dispatch({
                type: GET_CITY,
                payload: apiCity.data
            })
        } catch (e) {
            console.log(e);
            alert(`Sorry, we couldn't find your city.`);
        }
    }
}