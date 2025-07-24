// src/api/auth.ts
import axiosInstance from "@/utils/axiosInstance";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

// ✅ POST /auth/register
export const registerUser = async (payload: RegisterPayload) => {
  const response = await axiosInstance.post("/api/auth/register", payload);
  return response.data;
};

// ✅ POST /auth/login
export const loginUser = async (payload: LoginPayload) => {
  const response = await axiosInstance.post("/api/auth/login", payload);
  return response.data;
};
