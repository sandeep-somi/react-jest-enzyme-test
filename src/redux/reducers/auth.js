import types from '../types';
import utils from '../../utils';

let initialState = {
  fetching: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case types.GET_AUTH_REQUEST:
      return { ...state, fetching: true };
    
    case types.AUTH_REQUEST_SUCCESS:
      const user = {
        ...action.payload.user,
        token: action.payload.token
      };
      utils.saveObject('sr-user', user);
      state = {
        ...state,
        user: action.payload.user,
        fetching: false
      };
      return state;
    
    case types.AUTH_REQUEST_FAILED:
      state = {
        ...state,
        user: {},
        fetching: false
      }
      return state;
    
    case types.LOGOUT_USER:
      utils.removeObject('sr-user');
      return { ...state, user: {} };
    
    default:
      return state;
  }
}