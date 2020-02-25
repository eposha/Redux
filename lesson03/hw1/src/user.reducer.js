import { SET_USER, REMOVE_USER } from './user.actions';

const initialState = null;


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return user = action.payload.user;

        case REMOVE_USER:
            return user = null;

        default:
            return state
    }
};

export default userReducer;