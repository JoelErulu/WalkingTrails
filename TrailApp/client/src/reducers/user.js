import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING } from '../constants/actionTypes.js';

export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, users: action.payload };
        case CREATE:
            return { ...state, users: [ ...state.users, action.payload] };
        default:
            return state;
    }
}