import { SET_USER, REMOVE_USER } from './user.actions';

const initialState = {
    users: [
        {
            id: 0,
            name: 'Tom'
        }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: return {
            ...state,
            users: state.users.concat(action.payload.user)
        }

        case REMOVE_USER: return {
            ...state,
            users: state.users.filter(user => user.id !== action.payload.id)
        }
        default: return state
    }
};

export default userReducer;