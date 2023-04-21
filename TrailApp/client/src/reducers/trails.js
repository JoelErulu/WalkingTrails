// import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

// export default (trails = [], action) => {
//     switch (action.type) {
//         case DELETE:
//             return trails.filter((trail) => trail._id !== action.payload);
//         case UPDATE:
//             return trails.map((trail) => trail._id === action.payload._id ? action.payload : trail); 
//         case FETCH_ALL:
//             return action.payload;
//         case CREATE:
//             return [ ...trails, action.payload];
//         default:
//             return trails;
//     }
// }

import { FETCH_ALL, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes.js';

export default (state = { isLoading: true, trails: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, trails: action.payload };
        case CREATE:
            return { ...state, trails: [ ...state, action.payload] };
        case DELETE:
                return { ...state, trails: state.trails.filter((trails) => trails._id !== action.payload) };
        case UPDATE:
            return {...state, users: state.trails.map((trail) => trail._id === action.payload._id ? action.payload : trail)}; 
        default:
            return state;
        
        
    }
}