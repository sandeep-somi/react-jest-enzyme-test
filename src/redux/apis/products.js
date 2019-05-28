import utils from '../../utils';

export function createProductAPI(payload, file) {
  const data = new FormData();
  data.append("name", payload.name);
  data.append("price", payload.price);
  data.append("offerPrice", payload.offerPrice);
  data.append("description", payload.description);
  data.append("reviews", payload.reviews);
  data.append("rating", payload.rating);
  data.append("asset", file);
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

