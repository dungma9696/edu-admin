import { IUser } from "./user";

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResult {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface LogoutParams {
  token: string;
}

export type LogoutResult = object;
