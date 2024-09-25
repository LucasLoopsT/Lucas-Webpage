import axios from "axios";

const baseURL = "http://localhost:3000";

export function login(email, password){
    const response = axios.post(`${baseURL}/auth`, {email, password});
    return response;
}