import axios from "axios";

const baseURL = "https://lucas-webpage-production.up.railway.app";

export function login(email, password) {
  const response = axios.post(`${baseURL}/auth`, { email, password });
  return response;
}
