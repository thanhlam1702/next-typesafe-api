export type LoginBody = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export type LoginResponse = User & {
  token: string;
};
