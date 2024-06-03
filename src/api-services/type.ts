export interface ResponseNext {
  orderBy: string;
  direct: string;
  isEnd: boolean;
  pageIndex: number;
  total: number;
}

export interface TSortingParams {
  orderBy: string;
  direct: 'DESC' | 'ASC';
}

export type Assign<T1 = object, T2 = object> = Omit<T1, keyof T2> & T2;
