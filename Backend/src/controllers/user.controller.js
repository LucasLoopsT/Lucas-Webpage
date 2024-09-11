import Services from "../services/user.services.js";
const services = new Services();

export class Controller {
    create = async (req, res) => {
        try{

            const {name, email, password} = req.body;
    
            if (!name || !email || !password) {
                res.status(400).send({message: "Submit all fields to registration."})
            }
        
            const user = await services.create(req.body);
        
            if (!user){
                return res.status(400).send({message:"Error creating user."})
            }
        
            res.status(201).send({
                user:{
                    id: user._id,
                    name
                } 
            });
        } catch(e) {
            res.status(500).send({message:e.message})
        }
    }
    
    findAll = async (req, res) => {     
        try{ 
            const users = await services.findAll();
            
            if (users.length === 0) {
                res.status(400).send({message: "There are no users."})
            }
        
            res.status(200).send(users);
        } catch(e) {
            res.status(500).send({message:e.message})
        }
    }

    findById = async (req, res) => {     
        try{ 
            const id = req.params.id;
            
            if (!id) {
                res.status(400).send({message: "Submit the Id field."})
            }
        
            const user = await services.findById(id);

            res.status(200).send(user);
        } catch(e) {
            res.status(500).send({message:e.message})
        }
    }

    update = async (req, res) => {      
        try{
            const {name, email, password} = req.body;

            if (!name && !email && !password) {
                res.status(400).send({message: "Submit at least one field to update."})
            }

            const id = req.id;

            await services.update(id, name, email, password);
        
            res.status(201).send({message: "User successfully updated."});
        } catch(e) {
           res.status(500).send({message:e.message})
        }
    }

    delete = async (req, res) => {  
        try{
            const id = req.id;

            await services.delete(id);
            
            res.status(200).send({message:"User deleted."});
        } catch(e) {
            res.status(500).send({message:e.message})
        }   
    }
}

export default Controller;