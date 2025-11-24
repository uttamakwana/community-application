// src/api/axios.ts
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || "https://api.example.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

// Attach access token
api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.response?.status === 401 && !originalConfig._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalConfig.headers.Authorization = `Bearer ${token}`;
            return api(originalConfig);
          })
          .catch((e) => Promise.reject(e));
      }

      originalConfig._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = await SecureStore.getItemAsync("refreshToken");
        if (!refreshToken) throw new Error("No refresh token");

        const resp = await axios.post(`${BASE_URL}/auth/refresh`, {
          token: refreshToken,
        });
        const { accessToken, refreshToken: newRefresh } = resp.data;

        await SecureStore.setItemAsync("accessToken", accessToken);
        if (newRefresh)
          await SecureStore.setItemAsync("refreshToken", newRefresh);

        processQueue(null, accessToken);
        originalConfig.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalConfig);
      } catch (e) {
        processQueue(e, null);
        // Optional: notify user & perform logout
        Alert.alert("Session expired", "Please login again");
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(err);
  }
);

export default api;
