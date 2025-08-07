// src/utils/axiosInstance.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API || "http://localhost:5002";

const api = axios.create({
  baseURL,
  withCredentials: true,
});
api.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
