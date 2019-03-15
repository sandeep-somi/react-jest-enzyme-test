import utils from '../../utils';

export function loginAPI(user) {
  return utils.apiPOST('/users/login', user);
}

export function signUpAPI(user) {
  return utils.apiPOST('/users/signup', user);
}

export function forgotPasswordAPI(user) {
  return utils.apiPOST('/users/forgot-password', user);
}

export function resetPasswordAPI(user) {
  return utils.apiPOST('/users/reset-password', user);
}

export function updateUserAPI(user) {
  return utils.apiPATCH('/users/' + user.id, user);
}