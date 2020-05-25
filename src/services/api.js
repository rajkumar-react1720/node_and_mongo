import axios from 'axios';

function callingAxios(endpoint, params, method, reqbody = {}) {
  console.log('endpoint, params, method, reqbody', endpoint, params, method, reqbody)
    const axiosInstance = axios.create({
        headers:{
            'Content-Type': 'application/json',
        }
    });
    switch (method) {
        case 'GET':
          return axiosInstance
            .get(endpoint, {
              params,
            })
            .then(response => response)
            .catch(error => {
              throw error;
            });
        case 'POST':
          return axiosInstance
            .post(endpoint, reqbody)
            .then(response => response)
            .catch(error => error);
        case 'PUT':
          return axiosInstance
            .put(endpoint, reqbody)
            .then(response => response)
            .catch(error => error);
        case 'DELETE':
          return axiosInstance
            .delete(endpoint)
            .then(response => response)
            .catch(response => response);
        default:
          return '';
      }
}

export const callAxios = (...params) => callingAxios(...params);

export default callAxios;