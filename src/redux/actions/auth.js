import types from '../types';
import { loginAPI } from '../apis/auth';
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
      dispatch({ type: types.AUTH_REQUEST_FAILED });
      return reject(err);
    })
  );
}

export function logout() {
  dispatch({ type: types.LOGOUT_USER });
}