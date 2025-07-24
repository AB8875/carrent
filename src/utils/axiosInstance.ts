// src/utils/axiosInstance.ts
import axios from "axios";

// ✅ You can use .env.local to manage URLs per environment
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5002";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically add JWT token from localStorage to every request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
