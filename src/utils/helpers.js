import { getObject } from './localstorage';

export function randomString(len = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

export function isLoggedIn() {
  let user = getObject('sr-user');
  return user && user.token ? true : false
}