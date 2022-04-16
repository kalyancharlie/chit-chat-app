// Axios Interceptors
import axios from "axios";
import log from '../utils/logger'

const API = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: 'http://localhost:3000',
  withCredentials: true
});

API.interceptors.request.use(
(config) => {
  // log("REQ INTERCEPTOR");
  try {
  //   log(config);
    config.headers['Access-Control-Max-Age'] = 86400
    const {token} = JSON.parse(localStorage.getItem('userInfo'));
    config.headers["authorization"] = `Bearer ${token}`
    // log('LOCAL STORAGE INTERCEPTED TOKEN', accessToken)
  } catch (error) {
  //   log("REQ INTERCEPTOR ERROR:");
    log('axios error')
  } finally {
    return config
  }
},
(error) => {
    log('REQ ERROR:')
    log(error)
    return Promise.reject(error)
  }
);

export { API }