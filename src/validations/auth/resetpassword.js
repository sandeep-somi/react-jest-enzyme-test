import { isEmpty } from 'lodash';
import validator from 'is_js';

export default function (data) {
  let errors = {};

  if (validator.empty(data.password)) {
    errors['password'] = 'Password is required!'
  }

  if (validator.empty(data.confirmPassword)) {
    errors['confirmPassword'] = 'Please confirm password!'
  }

  if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
    errors['confirmPassword'] = "Password didn't matched!"
  }

  return {
    isValid: isEmpty(errors),
    errors
  }
}