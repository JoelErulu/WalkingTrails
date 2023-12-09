import { FETCH_ALL, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE} from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getMarkers = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchMarkers();

        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const createMarker = (marker) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createMarker(marker);

        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updateMarker = (id, marker) => async (dispatch) => {
    try {
        const { data } = await api.updateMarker(id, marker);

        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteMarker = (id) => async (dispatch) => {
    try {
        await api.deleteMarker(id);

        dispatch({ type: DELETE, payload: id });
    } catch (err) {
        console.log(err);
    }
}
