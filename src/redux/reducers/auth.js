import types from '../types';
import utils from '../../utils';
import { toast } from 'react-toastify';

let initialState = {
  fetching: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // login
    case types.GET_AUTH_REQUEST:
      return { ...state, fetching: true };
    
    case types.AUTH_REQUEST_SUCCESS:
      utils.saveObject('sr-user', action.payload);
      toast.success('Logged in successfully!');
      state = {
        ...state,
        user: action.payload,
        fetching: false
      };
      return state;
    
    case types.AUTH_REQUEST_FAILED:
      toast.error(action.payload.response.data.message);
      state = {
        ...state,
        user: {},
        fetching: false
      }
      return state;
    //logout
    case types.LOGOUT_USER:
      utils.removeObject('sr-user');
      toast.warn('Logged out successfully!');
      return { ...state, user: {} };
    //signup
    case types.SIGNUP_REQUEST: 
      return { state, fetching: true }
    
    case types.SIGNUP_REQUEST_SUCCESS:
      toast.success('Registered successfully!');
      return { state, fetching: false }
    
    case types.SIGNUP_REQUEST_FAILED:
      toast.error(action.payload.response.data.message);
      return { state, fetching: false }
    //forgot password
    case types.FORGOT_PASSWORD_REQUEST: 
      return { state, fetching: true }
    
    case types.FORGOT_PASSWORD_SUCCESS:
      toast.success('Email sent successfully!');
      return { state, fetching: false }
    
    case types.FORGOT_PASSWORD_FAILED:
      toast.error(action.payload.response.data.message);
      return { state, fetching: false }
    //reset password
    case types.RESET_PASSWORD_REQUEST:
      return { state, fetching: true }

    case types.RESET_PASSWORD_SUCCESS:
      toast.success('Password reset successful!');
      return { state, fetching: false }

    case types.RESET_PASSWORD_FAILED:
      toast.error(action.payload.response.data.message);
      return { state, fetching: false }
    default:
      return state;
  }
}