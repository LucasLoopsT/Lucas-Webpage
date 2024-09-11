import mongoose from "mongoose"
import ProjectServices from "../services/project.services.js"
import UserServices from "../services/user.services.js"
const proServices = new ProjectServices();
const userServices = new UserServices();

export const validId = (req, res, next) => {
  const id = req.params.id;
  
  if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid ID."}) 
    }

    next();
};
  
export const validUser = async (req, res, next) => {
    const id = req.params.id;
    
    const user = await userServices.findById(id)
    
    if(!user){
        return res.status(400).send({message:"User not found."}) 
    }
    
    req.id = id;
    req.user = user;
    
    next();
};

export const validProject = async (req, res, next) => {
    const id = req.params.id;
    
    const project = await proServices.findById(id);

    if(!project){
        return res.status(400).send({message:"Project not found."}) 
    }

    req.id = id;
    req.project = project;

    next();
};

export default {validId, validUser, validProject}