// src/utils/axiosInstance.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API || "http://localhost:5002";

const api = axios.create({
  baseURL,
  withCredentials: true,
});
console.log("🔗 API Base URL:", process.env.NEXT_PUBLIC_API);

export default api;
