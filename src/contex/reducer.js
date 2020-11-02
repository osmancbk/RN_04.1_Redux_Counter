const { State } = require("react-native-gesture-handler");

function reducer(state, action) { //dispatch({ type:'INCREASE_COUNTER' })
    switch (action.type) {  
        case 'INCREASE_COUNTER':
            state.counter = state.counter + 1;
            return { ...state }

        case 'DECREASE_COUNTER':
            state.counter = state.counter - 1;
            return {...state }
        // retun{ ...state, counter: state.counter - 1 } short

        case 'SET_USERNAME':
            state.userName = action.payload.newUserName; //with parametr

        default:
            return state;
    }
}

export { reducer };