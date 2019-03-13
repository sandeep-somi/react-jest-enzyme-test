//Function Name: saveObject
//Parameters: key, value
//Description: This function is used to save data/object in the local storage.
export function saveObject(key, value) {
  if (window && window.localStorage) {
    window.localStorage.saveObject(key, value);
  }
  return null;
}

//Function Name: getObject
//Parameters: key
//Description: This function is used to retive/get data/object from local storage.
export function getObject(key) {
  if (window && window.localStorage) {
    return window.localStorage.getObject(key);
  }
  return null;
}

//Function Name: removeObject
//Parameters: key
//Description: This function is used to remove/delete data/object from local storage.
export function removeObject(key) {
  if (window && window.localStorage) {
    window.localStorage.removeItem(key);
  }
  return null;
}