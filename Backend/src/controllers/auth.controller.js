import loginService from "../services/auth.services.js";
import bcrypt from "bcrypt"; 

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if(!email || !password){
            res.status(400).send({message: "Submit all fields to login."})
        }

        const user = await loginService(email);

        if(!user){
            res.status(404).send({message: "User or Password invalid."})
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        
        if(!passwordIsValid){
            res.status(404).send({message: "User or Password invalid."})
        }

    } catch(e) {
        res.status(500).send({message:e.message})
    }
}

export default login;