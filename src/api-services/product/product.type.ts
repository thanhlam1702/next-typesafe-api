export type ProductPrams = {
  limit: number;
  skip: number;
};

export type Product = {
  id: string;
  title: string;
  price: number;
};

export type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
