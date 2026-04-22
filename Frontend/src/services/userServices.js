import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export function login(email, password) {
  const response = axios.post(`${baseURL}/auth`, { email, password });
  return response;
}
