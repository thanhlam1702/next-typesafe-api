import axiosInstance from './axios';
import { authServices } from './auth/auth.services';
import { productServices } from './product/product.services';

import type { AxiosError, AxiosRequestConfig } from 'axios';

export type TFetchConfig = (
  config: AxiosRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void,
) => Promise<any>;

export type TResponse<T> = Promise<
  { data: T; error: null } | { data: null; error: AxiosError<{ message?: string }> }
>;

const services = (fetch: TFetchConfig) => ({
  product: productServices(fetch),
  auth: authServices(fetch),
});

const api = services((config, resolve, reject) =>
  axiosInstance.request(config).then(resolve).catch(reject),
);
export default api;
