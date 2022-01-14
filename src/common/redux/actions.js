import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const GET_CITY = "GET_CITY";
const REMOVE_CITY = "REMOVE_CITY";
const DETAIL_CITY = "DETAIL_CITY";

export function getCity(city) {
    return async function (dispatch) {
        try {
            const apiCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const apiCityDetail = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${apiCity.data.coord.lat}&lon=${apiCity.data.coord.lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`)
            // console.log('ONECALL', apiCityDetail.data)
            // console.log('WEATHER', apiCity.data)
            apiCityDetail.data.id = apiCity.data.id
            apiCityDetail.data.name = apiCity.data.name
            apiCityDetail.data.country = apiCity.data.sys.country
            dispatch({
                type: GET_CITY,
                payload: {
                    apiCity: apiCity.data,
                    apiCityDetail: apiCityDetail.data
                }
            })
        } catch (e) {
            console.log(e);
            alert(`Sorry, we couldn't find your city.`);
        }
    }
}

export function removeCity(cityId) {
    return {
        type: REMOVE_CITY,
        payload: cityId
    }
}

export function detailCity(cityId, name, country, lat, lon) {
    return async function (dispatch) {
        try {
            const apiCity = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`)
            console.log('FORECAST', apiCity.data)
            apiCity.data.name = name;
            apiCity.data.country = country;
            apiCity.data.id = cityId;

            dispatch({
                type: DETAIL_CITY,
                payload: apiCity.data
            })
        } catch (e) {
            console.log(e);
        }
    }
}