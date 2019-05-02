import utils from '../../utils';

export function createProductAPI(payload) {
  const data = new FormData();
  data.append(payload.name)
  data.append(payload.price)
  data.append(payload.asset)
  return utils.apiPOST('/products', data);
}

export function getProductsAPI() {
  return utils.apiGET('/products');
}

export function getProductAPI(id) {
  return utils.apiGET(`/products/${id}`);
}

export function deleteProductAPI(id) {
  return utils.apiDELETE(`/products/${id}`);
}

export function updateProductAPI(productId, product) {
  return utils.apiPATCH(`/products/${productId}`, product);
}

