import {
    INC,
    DEC,
    RES
} from './counter.actions'


const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state + 1;
        case DEC:
            return state - 1;
        case RES:
            return 0;

        default: return state
    }
};


export default counterReducer;