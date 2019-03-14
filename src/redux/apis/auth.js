import utils from '../../utils';

export function loginAPI(user) {
  return utils.apiPOST('/users/login', user);
}

export function SignUpAPI(user) {
  return utils.apiPOST('/users/signup', user);
}