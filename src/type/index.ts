export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  length: number;
}

export interface Products {
  _id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
