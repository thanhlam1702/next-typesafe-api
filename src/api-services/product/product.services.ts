import type { TResponse, TFetchConfig } from '../api';
import type { ProductPrams, ProductResponse } from './product.type';

export const productServices = (fetch: TFetchConfig) => ({
  list: {
    get({ params }: { params: ProductPrams }): TResponse<ProductResponse> {
      return new Promise((resolve, reject) => {
        fetch(
          {
            url: `/products`,
            method: 'get',
            params,
          },
          resolve,
          reject,
        );
      });
    },
  },
});
