import { isEmpty } from 'lodash';
import validator from 'is_js';

export default function (data) {
  let errors = {};
  if (validator.empty(data.email)) {
    errors['email']= 'Email is requried!'
  }

  if (data.email && !validator.email(data.email)) {
    errors['email'] = 'Please enter a valid email address!'
  }

  if (validator.empty(data.password)) {
    errors['password'] = 'Password is required!'
  }
  
  return {
    isValid: isEmpty(errors),
    errors
  }
}