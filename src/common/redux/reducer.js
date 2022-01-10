const initialState = {
    cities: [],
    cityDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CITY":
            if (state.cities.length) {
                const oneCity = state.cities.find(city => city.id === action.payload.id);
                if (!oneCity) {
                    return {
                        ...state,
                        cities: state.cities.concat(action.payload)
                    }
                } else {
                    return state;
                }
            } else {
                return {
                    ...state,
                    cities: state.cities.concat(action.payload)
                }
            }
        case "REMOVE_CITY":
            return {
                ...state,
                cities: state.cities.filter(c => c.id !== action.payload)
            }
        case "DETAIL_CITY":
            return {
                ...state,
                cityDetail: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;