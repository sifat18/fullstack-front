export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type UserName = {
  firstName: string;
  lastName: string;
};
export interface IAdmin {
  name: UserName;
  role: "admin" | "supre-admin";
  password: string;
  phoneNumber: string;
  email: string;
  service: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export type IUser = {
  name: UserName;
  role: "super-admin" | "admin" | "client";
  password: string;
  email: string;
  phoneNumber: string;
  address?: string;
  service?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface IService {
  name: string;
  serviceType: "Wash and Fold" | "Dry Cleaning" | "Ironing and Pressing";
  price: number;
  slots: number;
  description: string;
  status: "active" | "upcoming" | "inactive";
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IOrder {
  services: IService;
  client: IUser;
  slots?: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IReview {
  services: IService;
  client: IUser;
  message: string;
  date: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
