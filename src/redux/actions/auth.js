import types from '../types';
import {
  loginAPI,
  signUpAPI,
  updateUserAPI,
  resetPasswordAPI,
  forgotPasswordAPI
} from '../apis/auth';
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
  return new Promise((resolve, reject) => signUpAPI(payload)
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

export function forgotPassword(payload) {
  dispatch({ type: types.FORGOT_PASSWORD_REQUEST });
  return new Promise((resolve, reject) => forgotPasswordAPI(payload)
    .then(response => {
      dispatch({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: response
      });
      return resolve(response);
    })
    .catch(err => {
      dispatch({
        type: types.FORGOT_PASSWORD_FAILED,
        payload: err
      });
      return reject(err);
    })
  );
}

export function resetPassword(payload) {
  dispatch({ type: types.RESET_PASSWORD_REQUEST });
  return new Promise((resolve, reject) => resetPasswordAPI(payload)
    .then(response => {
      dispatch({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: response
      });
      return resolve(response);
    })
    .catch(err => {
      dispatch({
        type: types.RESET_PASSWORD_FAILED,
        payload: err
      });
      return reject(err);
    })
  );
}

