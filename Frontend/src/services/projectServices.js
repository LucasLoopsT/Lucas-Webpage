import axios from "axios";

const baseURL = "https://lucas-webpage.onrender.com";

export function create(token, payload) {
  const response = axios.post(`${baseURL}/project/`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export function findAll() {
  const response = axios.get(`${baseURL}/project`);
  return response;
}

export function findById(id) {
  const response = axios.get(`${baseURL}/project/${id}`);
  return response;
}

export function update(token, id, payload) {
  const response = axios.patch(`${baseURL}/project/${id}`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export function deleteProject(token, id) {
  const response = axios.delete(`${baseURL}/project/delete/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response;
}
