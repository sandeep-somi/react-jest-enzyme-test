import types from '../types';
import {
  getProductsAPI,
  createProductAPI
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

export function addProduct(product, file) {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return new Promise((resolve, reject) => createProductAPI(product, file)
    .then(response => {
      dispatch({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: response.product
      });
      return resolve(response);
    })
    .catch(err => {
      dispatch({
        type: types.ADD_PRODUCT_FAILED,
        payload: err
      });
      return reject(err);
    })
  );
}