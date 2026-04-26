import Services from "../services/project.services.js";
const services = new Services();

export class Controller {
    create = async (req, res) => {
        try{

            const {name, preview, priority, shortDescription, description, techs, link_git, link_deploy} = req.body;
    
            if (!name || !preview || !priority || !shortDescription || !description || !techs || !link_git || !link_deploy ) {
                return res.status(400).send({message: "Submit all fields to registration."})
            }
        
            const project = await services.create(req.body);
        
            if (!project){
                return res.status(400).send({message:"Error creating project."})
            }
        
            return res.status(201).send({
                project:{
                    id: project._id,
                    name,
                    preview, 
                    shortDescription, 
                    description,
                    name_en: project.name_en,
                    shortDescription_en: project.shortDescription_en,
                    description_en: project.description_en,
                    techs, 
                    link_git, 
                    link_deploy
                } 
            });
        } catch(e) {
            return res.status(500).send({message:e.message});
        }
    }
    
    findAll = async (req, res) => {     
        try{ 
            const projects = await services.findAll();
            
            if (projects.length === 0) {
                return res.status(400).send({message: "There are no projects."})
            }

            const sortedProjects = projects.sort((a, b) => b.priority - a.priority);

            return res.status(200).send(sortedProjects);
        } catch(e) {
            return res.status(500).send({message:e.message});
        }
    }

    findById = async (req, res) => {     
        try{ 
            const id = req.params.id;
            
            if (!id) {
                return res.status(400).send({message: "Submit the Id field."})
            }
        
            const project = await services.findById(id);

            return res.status(200).send(project);
        } catch(e) {
            return res.status(500).send({message:e.message});
        }
    }

    update = async (req, res) => {      
        try{
            const {
                name,
                preview,
                priority,
                shortDescription,
                description,
                name_en,
                shortDescription_en,
                description_en,
                techs,
                link_git,
                link_deploy,
            } = req.body;

            const hasAny =
                name !== undefined ||
                preview !== undefined ||
                priority !== undefined ||
                shortDescription !== undefined ||
                description !== undefined ||
                name_en !== undefined ||
                shortDescription_en !== undefined ||
                description_en !== undefined ||
                techs !== undefined ||
                link_git !== undefined ||
                link_deploy !== undefined;

            if (!hasAny) {
                return res.status(400).send({message: "Submit at least one field to update."})
            }

            const id = req.id;

            await services.update(id, req.body);
        
            return res.status(200).send({message: "Project successfully updated."});
        } catch(e) {
            return res.status(500).send({message:e.message});
        }
    }

    delete = async (req, res) => {  
        try{
            const id = req.id;

            await services.delete(id);
            
            return res.status(200).send({message:"Project deleted."});
        } catch(e) {
            return res.status(500).send({message:e.message});
        }   
    }
}

export default Controller;