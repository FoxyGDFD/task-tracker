export type UserId = number;

export type User = {
  id: UserId;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
};
