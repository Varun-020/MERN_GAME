import axios from 'axios';
import { SET_LOADER, CLOSE_LOADER, SET_TOKEN, LOGIN_ERRORS, LOGIN_SUCCESS, REGISTER_ERRORS } from '../../store/types/MasterTypes';

export const masterLogin = (state) => {
    return async (dispatch) => {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            dispatch({ type: SET_LOADER })
            const { data } = await axios.post('/masterLogin', state, config);
            dispatch({ type: CLOSE_LOADER });
            localStorage.setItem('myToken', data.token);
            dispatch({ type: SET_TOKEN, payload: data.token });
            dispatch({ type: LOGIN_SUCCESS });


        }
        catch (error) {
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: LOGIN_ERRORS, payload: error.response.data.errors });
        }
    }
};