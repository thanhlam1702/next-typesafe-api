import axios from 'axios';

import type { AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return {
      data: response.data,
      error: null,
      response: response,
      status: response.status,
      headers: response.headers,
      statusText: response.statusText,
      config: response.config,
    };
  },
  function (error: AxiosError) {
    return { data: null, error: error };
  },
);
export default axiosInstance;
