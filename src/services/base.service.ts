import { ENVIRONMENT } from "@/config/environments";
import axios, { type AxiosInstance } from "axios";

export type StandardResponse<T> = {
  message: string;
  data: T;
  success: boolean;
};

export type ErrorResponse = {
  message: string;
  error: string;
};

const api: AxiosInstance = axios.create({
  baseURL: ENVIRONMENT.COINGECKO.URL,
  headers: {
    "x-cg-demo-api-key": ENVIRONMENT.COINGECKO.API_KEY,
    Accept: "application/json",
  },
});

export default api;
