import { AUTH, LOGOUT, AUTH_ERROR } from '../constants/actionTypes.js';

const initialState = {
    authData: [],
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data.token, error: null };
        case LOGOUT:
            localStorage.clear();
            sessionStorage.clear();
            return { ...state, authData: null, error: null };
        case AUTH_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default authReducer;
