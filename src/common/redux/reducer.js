const initialState = {
    cities: [],
    city: {},
    displayMessage: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CITY":
            if (state.cities.length) {
                const oneCity = state.cities.find(city => city.id === action.payload.apiCity.id);
                if (!oneCity) {
                    if (state.cities.length < 5) {
                        return {
                            ...state,
                            cities: state.cities.concat(action.payload.apiCity),
                            city: action.payload.apiCityDetail,
                            displayMessage: false
                        }
                    } else {
                        state.cities.shift();
                        return {
                            ...state,
                            cities: state.cities.concat(action.payload.apiCity),
                            city: action.payload.apiCityDetail,
                            displayMessage: false
                        }
                    }
                } else {
                    return state;
                }
            } else {
                if (state.cities.length < 5) {
                    return {
                        ...state,
                        cities: state.cities.concat(action.payload.apiCity),
                        city: action.payload.apiCityDetail,
                        displayMessage: false
                    }
                } else {
                    state.cities.shift();
                    return {
                        ...state,
                        cities: state.cities.concat(action.payload.apiCity),
                        city: action.payload.apiCityDetail,
                        displayMessage: false
                    }
                }
            }
        case "REMOVE_CITY":
            if (state.cities.length === 1) {
                return {
                    ...state,
                    cities: state.cities.filter(c => c.id !== action.payload),
                    displayMessage: true
                }
            } else {
                return {
                    ...state,
                    cities: state.cities.filter(c => c.id !== action.payload)
                }
            }
        case "DETAIL_CITY":
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;