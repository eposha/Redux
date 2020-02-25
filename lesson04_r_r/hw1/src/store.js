import { createStore } from 'redux';
import usersReduser from './users/userList.reducer';
// import usersReduser from './users/users.reducer';
// import counterReduser from './counter/counter.reducer';

// const appReducer = combineReducers({
//   users: usersReduser,
//   counter: counterReduser
// });

const store = createStore(usersReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;