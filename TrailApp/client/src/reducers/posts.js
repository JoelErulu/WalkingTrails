import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING } from '../constants/actionTypes.js';

export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case DELETE:
            return { ...state, posts: state.filter((post) => post._id !== action.payload) };
        case UPDATE:
        case LIKE:
            return { ...state, posts: state.map((post) => post._id === action.payload._id ? action.payload : post) }; 
        case FETCH_ALL:
            return { ...state, posts: action.payload };
        case CREATE:
            return { ...state, posts: [ ...state, action.payload] };
        default:
            return state;
    }
}