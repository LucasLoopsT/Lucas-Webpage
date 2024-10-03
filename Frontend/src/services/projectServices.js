import axios from "axios";

const baseURL = "https://lucas-webpage.onrender.com";

export function create(token, name, preview, shortDescription, description, techs, link_git, link_deploy){
    const response = axios.post(`${baseURL}/project/`, {name, preview, shortDescription, description, techs, link_git, link_deploy}, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response;
}

export function findAll(){
    const response = axios.get(`${baseURL}/project`);
    return response;
}

export function findById(id){
    const response = axios.get(`${baseURL}/project/${id}`);
    return response;
}

export function update(token, id, name, preview, shortDescription, description, techs, link_git, link_deploy){
    const response = axios.patch(`${baseURL}/project/${id}`, {name, preview, shortDescription, description, techs, link_git, link_deploy}, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response;
}

export function deleteProject(token, id){
    const response = axios.delete(`${baseURL}/project/delete/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response;
}