import types from '../types';
import {
  getProductsAPI
} from '../apis/products';
import store from '../../store';

const { dispatch } = store;

export function getProducts() {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return new Promise((resolve, reject) => getProductsAPI()
    .then(response => {
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: response
      });
      return resolve(response);
    })
    .catch(err => {
      dispatch({
        type: types.GET_PRODUCTS_FAILED,
        payload: err
      });
      return reject(err);
    })
  );
}