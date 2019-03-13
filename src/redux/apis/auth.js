import utils from '../../utils';

export function loginAPI(user) {
  return utils.apiPOST('/users/login', user);
}