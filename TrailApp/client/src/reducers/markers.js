import { FETCH_ALL, CREATE, START_LOADING, END_LOADING } from '../constants/actionTypes.js';

export default (state = { isLoading: true, markers: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, markers: action.payload };
        case CREATE:
            return { ...state, markers: [ ...state, action.payload] };
        default:
            return state;
    }
}