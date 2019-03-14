import { isEmpty } from 'lodash';
import validator from 'is_js';

export default function (data) {
  let errors = {};

  if (validator.empty(data.firstName)) {
    errors['firstName'] = 'First Name is required!'
  }

  if (validator.empty(data.password)) {
    errors['password'] = 'Password is required!'
  }
  
  if (validator.empty(data.confirmPassword)) {
    errors['confirmPassword'] = 'Please confirm password!'
  }

  if (validator.empty(data.email)) {
    errors['email'] = 'Email is requried!'
  }

  if (data.email && !validator.email(data.email)) {
    errors['email'] = 'Please enter a valid email address!'
  }

  if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
    errors['confirmPassword'] = "Password didn't matched!"
  }

  return {
    isValid: isEmpty(errors),
    errors
  }
}