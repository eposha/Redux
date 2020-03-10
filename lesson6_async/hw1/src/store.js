import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './weather/weather.reducer';

const reducer = combineReducers({
    weather: weatherReducer
});

// const logger = (store) => (next) => (action) => {
//     console.group(action.type);
//     console.info('dispatching', action);
//     const result = next(action);
//     console.log('next state', store.getState());
//     console.groupEnd();
//     return result;
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk),
        //  applyMiddleware(logger)
    )
)

// const logger = store => next => action => {
//     console.group(action.type);
//     console.info(action);
//     const result = next(action);
//     console.log('new state:', store.getState());
//     console.groupEnd();
//     return result
// };
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     usersReducer,
//     composeEnhancers(
//         applyMiddleware(logger)
//     )
// );

export default store;
