/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
// import { GetServerSidePropsContext } from 'next';
import { config } from "./env";
import { stringify } from "qs";
import { STORAGE } from "@/constants/storage.const";

const baseURL = config.VITE_API_BASE_URL;



export const request = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (parameters) => {
    return stringify(parameters, { arrayFormat: "repeat" });
  },
});

request.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem(STORAGE.TOKEN);
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: AxiosError | null, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

request.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Nếu lỗi 401 và chưa thử refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return request(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshToken();
        localStorage.setItem(STORAGE.TOKEN, newToken);

        request.defaults.headers.common.Authorization = `Bearer ${newToken}`;
        processQueue(null, newToken);

        return request(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError, null);
        logoutUser();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error.response?.data);
  },
);

/**
 * API gọi để refresh token
 */
const refreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem(STORAGE.REFRESH_TOKEN);
  if (!refreshToken) throw new Error("No refresh token available");
  const param = `${baseURL}/client/auth/refresh-token?refreshToken=${refreshToken}`;

  const response = await axios.post(param);
  return response.data.accessToken;
};

/**
 * Hàm logout khi refresh token thất bại
 */
const logoutUser = () => {
  localStorage.removeItem(STORAGE.TOKEN);
  localStorage.removeItem(STORAGE.REFRESH_TOKEN);

  window.location.href = "/sign-in"; // Điều hướng về trang login
};
