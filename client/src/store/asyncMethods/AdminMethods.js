import axios from 'axios';
import { SET_LOADER, CLOSE_LOADER, SET_TOKEN, LOGIN_ERRORS, LOGIN_SUCCESS, REGISTER_ERRORS } from '../../store/types/AdminTypes';

export const adminLogin = (state) => {
    return async (dispatch) => {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            dispatch({ type: SET_LOADER })
            const { data } = await axios.post('/adminLogin', state, config);
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


export const adminRegister = (state) => {
    console.log(state);
    return async (dispatch) => {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };
        dispatch({ type: SET_LOADER });
        try {
            const response = await axios.post('/addAdmin', state, config);
            console.log('response add user', response);
            dispatch({ type: CLOSE_LOADER });
            // dispatch({ type: SET_TOKEN, payload: response.data.token });
            // localStorage.setItem('myToken', response.data.token);

        }
        catch (error) {
            console.log('error----', error.response);
            dispatch({ type: CLOSE_LOADER });
            dispatch({ type: REGISTER_ERRORS, payload: error.response.data.errors });
        }
    }
};