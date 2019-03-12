import axios from 'axios';
import { getUser } from './';
import queryString from 'query-string';
import { API_URL } from '../constants';

//Function Name: getHeaders
//Parameters: none;
//Description: This function is used to fetch the access token from the localstorage for authorization purpose.
export function getHeaders() {
  let user = getUser();
  return {
    Authorization: `Token ${(user && user.accessToken) || null}`,
  };
}

//Function Name: apiRequest.
//Parameters: endPoint, data, method, headers, requestOptions.
//Description: This function is used to send async requests to remote server using APIs.
export function apiRequest(endPoint, data, method, headers, requestOptions) {
  return new Promise((resolve, reject) => {
    headers = {
      ...getHeaders(),
      ...headers
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        params: data,
        paramsSerializer: function (params) {
          return queryString.stringify(params, { arrayFormat: "repeat" });
        },
        headers
      }
    }

    axios[method](endPoint, data, { headers }).then(response => {
      const { data } = response;
      if (data.status === false) {
        return reject(data);
      }
      return resolve(data);
    }).catch(error => {
      return reject(error);
    });
  });
}


//Function Name: generateURL
//Parameters: path
//Description: This function is used to combine api end points with the base URL of the API.
export function generateURL(path) {
  if (path.includes("http")) {
    return path;
  }
  return API_URL + path;
}

//Function Name: apiGET
//Parameters: endPoint, data, headers, requestOptions
//Description: This function is used perform get api request
export function apiGET(endPoint, data, headers = {}, requestOptions) {
  return apiRequest(generateURL(endPoint), data, "get", headers, requestOptions);
}

//Function Name: apiPOST
//Parameters: endPoint, data, headers, requestOptions
//Description: This function is used perform post api request
export function apiPOST(endPoint, data, headers = {}) {
  return apiRequest(generateURL(endPoint), data, "post", headers);
}

//Function Name: apiPUT
//Parameters: endPoint, data, headers, requestOptions
//Description: This function is used perform put api request
export function apiPUT(endPoint, data, headers = {}) {
  return apiRequest(generateURL(endPoint), data, "put", headers);
}

//Function Name: apiDELETE
//Parameters: endPoint, data, headers, requestOptions
//Description: This function is used perform get delete request
export function apiDELETE(endPoint, data, headers = {}) {
  return apiRequest(generateURL(endPoint), data, "delete", headers);
}