// authActions.js
import { AUTH, AUTH_ERROR } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        if(data.result.role === "admin" || data.result.role === "SuperAdmin") {
            navigate('/admin');
        } else {
            navigate('/home');
        }
    } catch (err) {
        dispatch({ type: AUTH_ERROR, error: err.response.data.message }); // Dispatch AUTH_ERROR action
        console.log(err);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // Perform form validation
        if (formData.password.length < 8) {
            throw new Error('Password must be at least 8 characters long.');
        }
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            throw new Error('All fields are required.');
        }
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        navigate('/home');
    } catch (err) {
        let errorMessage = 'An error occurred during signup.';
        if (err.message) {
            errorMessage = err.message;
        }
        dispatch({ type: AUTH_ERROR, error: errorMessage }); // Dispatch AUTH_ERROR action with the error message
        console.log(err);
    }
}
