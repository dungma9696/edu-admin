import { request } from "@/configs/axios";
import { LoginParams, LoginResult } from "@/interface/user/login";
import { IChangePassword, IUser } from "@/interface/user/user";
import { AxiosResponse } from "axios";
import {
  CHANGE_PASSWORD,
  CURRENT_USER,
  LOGIN,
  LOGOUT,
  REFRESH_TOKEN,
  TOKEN_PREVIEW,
} from "./config.endpoint";

export const login = async (data: LoginParams) => {
  const response: AxiosResponse<LoginResult> = await request.post<LoginResult>(
    LOGIN,
    data,
  );
  return response.data;
};

export const getProfile = async () => {
  const response: AxiosResponse<IUser> = await request.get<IUser>(CURRENT_USER);
  return response.data;
};

export const changePassWordApi = async (data: IChangePassword) => {
  const response: AxiosResponse<string> = await request.post<string>(
    CHANGE_PASSWORD,
    data,
  );
  return response.data;
};

export const logout = async (data: boolean) => {
  const response: AxiosResponse<boolean> = await request.post<boolean>(
    LOGOUT,
    data,
  );
  return response.data;
};
export const getTokenPreview = async () => {
  const response: AxiosResponse<string> =
    await request.get<string>(TOKEN_PREVIEW);
  return response.data;
};

export const refreshAccessToken = async (data: boolean) => {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log(refreshToken);
  const param = REFRESH_TOKEN + "?refreshToken=" + refreshToken;
  const response: AxiosResponse<LoginResult> = await request.post<LoginResult>(
    param,
    data,
  );
  if (response.data) {
    const { accessToken } = response.data;
    localStorage.setItem("token", accessToken); // Lưu Access Token mới
    return accessToken;
  }
  return null;
};
