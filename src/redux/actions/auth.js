import types from '../types';
import { loginAPI, SignUpAPI } from '../apis/auth';
import store from '../../store';

const { dispatch } = store;

export function login(payload) {
  dispatch({ type: types.GET_AUTH_REQUEST });
  return new Promise((resolve, reject) => loginAPI(payload)
    .then(response => {
      dispatch({
        type: types.AUTH_REQUEST_SUCCESS,
        payload: response
      });
      return resolve(response);
    })
    .catch(err => {
      dispatch({
        type: types.AUTH_REQUEST_FAILED,
        payload: err
      });
      return reject(err);
    })
  );
}

export function logout() {
  dispatch({ type: types.LOGOUT_USER });
}

export function signUp(payload) {
  dispatch({ type: types.SIGNUP_REQUEST });
  return new Promise((resolve, reject) => SignUpAPI(payload)
    .then(response => {
      dispatch({
        type: types.SIGNUP_REQUEST_SUCCESS,
        payload: response
      });
      return resolve(response);
    })
    .catch(err => {
      dispatch({
        type: types.SIGNUP_REQUEST_FAILED,
        payload: err
      });
      return reject(err);
    })
  );
}
