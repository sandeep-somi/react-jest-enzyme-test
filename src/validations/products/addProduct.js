import { isEmpty } from 'lodash';
import validator from 'is_js';

export default function (data) {
  let errors = {};
  if (validator.empty(data.name)) {
    errors['name']= 'Product name is requried!'
  }

  if (!data.price || data.price <= 0) {
    errors['price'] = 'Product price is required!'
  }
  
  return {
    isValid: isEmpty(errors),
    errors
  }
}