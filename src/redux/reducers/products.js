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
        fetchingProducts: false
      }
      return state;
    
    case types.ADD_PRODUCT_REQUEST:
      return { ...state, fetchingProduct: true };

    case types.ADD_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: [...state.products, action.payload],
        productsMap: { ...state.productsMap, [action.payload.id]: action.payload },
        fetchingProduct: false
      };
      return state;

    case types.ADD_PRODUCT_FAILED:
      toast.error(action.payload.response.data.message);
      state = {
        ...state,
        fetchingProduct: false
      }
      return state;
   
    default:
      return state;
  }
}