import { get } from 'http';

import type { TResponse, TFetchConfig } from '../api';
import type { User, LoginBody, LoginResponse } from './auth.type';

export const authServices = (fetch: TFetchConfig) => ({
  login: {
    post({ body }: { body: LoginBody }): TResponse<LoginResponse> {
      return new Promise((resolve, reject) => {
        fetch(
          {
            url: `/auth/login`,
            method: 'post',
            data: body,
          },
          resolve,
          reject,
        );
      });
    },
  },
  user: {
    get(): TResponse<User> {
      return new Promise((resolve, reject) => {
        fetch(
          {
            url: `/auth/me`,
            method: 'get',
          },
          resolve,
          reject,
        );
      });
    },
  },
});
