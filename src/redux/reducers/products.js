import types from '../types';
import utils from '../../utils';
import { toast } from 'react-toastify';

let initialState = {
  fetchingProducts: false,
  fetchProduct: false,
  products: [],
  productsMap: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // get products
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, fetchingProducts: true };

    case types.GET_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.values || [],
        productsMap: {},
        fetchingProducts: false
      };
      return state;

    case types.GET_PRODUCTS_FAILED:
      toast.error(action.payload.response.data.message);
      state = {
        ...state,
        products: [],
        productsMap: {},
        fetchingProducts: false
      }
      return state;
   
    default:
      return state;
  }
}