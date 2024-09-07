import Services from "../services/project.services.js";
const services = new Services();

export class Controller {
    create = async (req, res) => {
        try{

            const {name, preview, shortDescription, description, techs, link_git, link_deploy} = req.body;
    
            if (!name || !preview || !shortDescription || !description || !techs || !link_git || !link_deploy ) {
                res.status(400).send({message: "Submit all fields to registration."})
            }
        
            const project = await services.create(req.body);
        
            if (!project){
                return res.status(400).send({message:"Error creating project."})
            }
        
            res.status(201).send({
                project:{
                    id: project._id,
                    name,
                    preview, 
                    shortDescription, 
                    description, 
                    techs, 
                    link_git, 
                    link_deploy
                } 
            });
        } catch(e) {
            res.status(500).send({message:e.message})
        }
    }
    
    findAll = async (req, res) => {     
        try{ 
            const projects = await services.findAll();
            
            if (projects.length === 0) {
                res.status(400).send({message: "There are no projects."})
            }
        
            res.status(200).send(projects);
        } catch(e) {
            res.status(500).send({message:e.message})
        }
    }

    update = async (req, res) => {      
        try{
            const {name, preview, shortDescription, description, techs, link_git, link_deploy} = req.project;

            if (!name && !preview && !shortDescription && !description && !techs && !link_git && !link_deploy ) {
                res.status(400).send({message: "Submit at least one field to update."})
            }

            const id = req.id;

            await services.update(id, name, preview, shortDescription, description, techs, link_git, link_deploy);
        
            res.status(201).send({message: "Project successfully updated."});
        } catch(e) {
           res.status(500).send({message:e.message})
        }
    }

    delete = async (req, res) => {  
        try{

            const {id} = req.body;
            
            if (!id) {
                res.status(400).send({message: "Submit the ID field to delete the project."})
            }
            
            await services.findAll();
            
            res.status(200).send(projects);
        } catch(e) {
            res.status(500).send({message:e.message})
        }   
    }
}

export default Controller;