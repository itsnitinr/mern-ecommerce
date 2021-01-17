import axios from 'axios';
import { enqueueSnackbar } from '../alert/alert.actions';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './user.types';

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({ type: REGISTER_SUCCESS, payload: data });

    dispatch(
      enqueueSnackbar({
        message: 'Welcome aboard!',
        options: { variant: 'success' },
      })
    );

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const errorMsg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: REGISTER_FAIL,
      payload: errorMsg,
    });

    dispatch(
      enqueueSnackbar({
        message: errorMsg,
        options: { variant: 'error' },
      })
    );
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const errorMsg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: LOGIN_FAIL,
      payload: errorMsg,
    });

    dispatch(
      enqueueSnackbar({
        message: errorMsg,
        options: { variant: 'error' },
      })
    );
  }
};
