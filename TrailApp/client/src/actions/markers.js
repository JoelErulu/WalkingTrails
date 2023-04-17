import { FETCH_ALL, START_LOADING, END_LOADING, CREATE} from '../constants/actionTypes.js';
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