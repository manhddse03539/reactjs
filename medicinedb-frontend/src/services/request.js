import axios from 'axios';

const TIMEOUT = 65 * 1000;

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: TIMEOUT,
});

const pending = {};

request.interceptors.request.use((config) => config);

request.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      if (pending[config.url]) {
        pending[config.url].cancel('REQUEST_IS_CANCELLED');
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/* istanbul ignore next */
request.interceptors.response.use(
  (response) => {
    delete pending[response.config.url];
    return response;
  },
  (error) => 
    // eslint-disable-next-line consistent-return
     Promise.reject(error)
);

export default request;
