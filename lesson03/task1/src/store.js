import { createStore, combineReducers } from 'redux'
import usersReduser from './users.reducer';
import counterReduser from './counter.reducer';

const appReducer = combineReducers({
  users: usersReduser,
  counter: counterReduser
});

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;