import Services from "../services/user.services.js";
const services = new Services();

export class Controller {
    create = async (req, res) => {
        try{

            const {name, email, password} = req.body;
    
            if (!name || !email || !password) {
                return res.status(400).send({message: "Submit all fields to registration."})
            }
        
            const user = await services.create(req.body);
        
            if (!user){
                return res.status(400).send({message:"Error creating user."})
            }
        
            return res.status(201).send({
                user:{
                    id: user._id,
                    name
                } 
            });

        } catch(e) {
            return res.status(500).send({message:e.message})
        }
    }
    
    findAll = async (req, res) => {     
        try{ 
            const users = await services.findAll();
            
            if (users.length === 0) {
                return res.status(400).send({message: "There are no users."})
            }
        
            return res.status(200).send(users);
        } catch(e) {
            return res.status(500).send({message:e.message})
        }
    }

    findById = async (req, res) => {     
        try{ 
            const id = req.params.id;
            
            if (!id) {
                return res.status(400).send({message: "Submit the Id field."})
            }
        
            const user = await services.findById(id);

            return res.status(200).send(user);
        } catch(e) {
            return res.status(500).send({message:e.message})
        }
    }

    update = async (req, res) => {      
        try{
            const {name, email, password} = req.body;

            if (!name && !email && !password) {
                return res.status(400).send({message: "Submit at least one field to update."})
            }

            const id = req.id;

            await services.update(id, name, email, password);
        
            return res.status(200).send({message: "User successfully updated."});
        } catch(e) {
            return res.status(500).send({message:e.message})
        }
    }

    delete = async (req, res) => {  
        try{
            const id = req.id;

            await services.delete(id);
            
            return res.status(200).send({message:"User deleted."});
        } catch(e) {
            return res.status(500).send({message:e.message})
        }   
    }
}

export default Controller;