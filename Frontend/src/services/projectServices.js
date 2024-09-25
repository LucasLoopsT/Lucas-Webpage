import axios from "axios";

const baseURL = "http://localhost:3000";

function create(name, preview, shortDescription, description, techs, link_git, link_deploy){
    const response = axios.post(`${baseURL}/project`, {name, preview, shortDescription, description, techs, link_git, link_deploy});
    return response;
}

function findAll(){
    const response = axios.get(`${baseURL}/project`);
    return response;
}

function findById(){
    const response = axios.get(`${baseURL}/project/${id}`);
    return response;
}

function update(name, preview, shortDescription, description, techs, link_git, link_deploy){
    const response = axios.patch(`${baseURL}/project/${id}`, {name, preview, shortDescription, description, techs, link_git, link_deploy});
    return response;
}

function deleteProject(){
    const response = axios.delete(`${baseURL}/project/delete/${id}`);
    return response;
}

export default {create, findAll, findById, update, deleteProject}