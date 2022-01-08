const initialState = {
    cities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CITY":
            return {
                cities: state.cities.concat(action.payload)
            }
        case "REMOVE_CITY":
            return {
                cities: state.cities.filter(c => c.id !== action.payload)
            }
        default:
            return state;
    }
}

export default rootReducer;