export function saveObject(key, value) {
  if (window && window.localStorage) {
    window.localStorage.saveObject(key, value);
  }
}

export function removeObject(key) {
  if (window && window.localStorage) {
    window.localStorage.removeItem(key);
  }
}

export function getObject(key) {
  if (window && window.localStorage) {
    return window.localStorage.getObject(key);
  }

  return null;
}