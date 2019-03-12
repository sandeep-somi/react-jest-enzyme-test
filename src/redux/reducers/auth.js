import types from '../types';

let initialState = {
  fetching: false,
  auth: {
    user: {}
  }
}

export default function (state = initialState, action) {
  switch (action.type) {

    case types.GET_AUTH_REQUEST: 
      return { ...state, fetching: true }
    
    case types.AUTH_REQUEST_SUCCESS:
      state = {
        ...state,
        auth: {
        ...state.auth,
          user: action.payload
        }
      }
      return { ...state, fetching: false }
    
    case types.AUTH_REQUEST_FAILED:
      state = {
        ...state,
        auth: {
          ...state.auth,
          user: {}
        }
      }
      return { ...state, fetching: false }
    
    default:
      return { ...state }
  }
}