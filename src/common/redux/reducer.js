const initialState = {
    city: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CITY":
            return {
                city: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;