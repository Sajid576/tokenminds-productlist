import axios from 'axios';
// import { start, increment, finish } from '../store/actions';

const apiBaseUrl = 'http://localhost:3000';
const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 300000,
  validateStatus: (status) => status === 200,
});

instance.defaults.onDownloadProgress = (progressEvent) => {
  // increment((progressEvent.loaded / progressEvent.total) * 100);
};

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // start();

    console.debug('request', config);

    return config;
  },
  function (error) {
    // Do something with request error

    console.error('error', error);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // finish();

    console.debug('response', response);

    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // finish();

    if (!error) return null;

    if (!error.response) return null;

    if (!error.response.data) return null;

    console.debug('response', error.response);

    return error.response.data;
  }
);

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImVtYWlsIjoic2FqaWRhaG1lZDY5NkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjAwNTc3NTUsImV4cCI6MTY2MDE0NDE1NX0.Dv2dr1Qzol20gUwqfaKwBbjBIuRP2VSpIIwSgeNbekA',
  };
};

export const callPostApi = (uri, payload) => {
  return instance.post(uri, payload, {
    headers: getHeaders(),
  });
};

export const callGetApi = (uri) => {
  return instance.get(uri, {
    headers: getHeaders(),
  });
};

export const callPutApi = (uri, payload) => {
  return instance.put(uri, payload, {
    headers: getHeaders(),
  });
};

export const callDeleteApi = (uri) => {
  return instance.delete(uri, {
    headers: getHeaders(),
  });
};
