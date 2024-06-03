'use client';

import { useState } from 'react';

import api from '_@/api-services/api';

import type { Product } from '_@/api-services/product/product.type';

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);

  const onGetProducts = async () => {
    const { data, error } = await api.product.list.get({ params: { limit: 10, skip: 0 } });
    if (error) {
      console.log(error);
      return;
    }
    setProducts(data.products);
  };

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10">
      <button className="rounded-lg bg-purple-500 px-5 py-2 text-white" onClick={onGetProducts}>
        Get Product
      </button>

      <div className="grid gap-5">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
