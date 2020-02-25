import { createStore } from 'redux'

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

const initialValue = {
    value: 0
}

const counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: + 1 };

        case DECREMENT:
            return { ...state, value: - 1 };

        default:
            return state
    }
};

const store = createStore(counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store