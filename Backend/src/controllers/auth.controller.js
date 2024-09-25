import {loginService, generateToken} from "../services/auth.services.js";
import bcrypt from "bcrypt"; 

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).send({message: "Submit all fields to login."})
        }

        const user = await loginService(email);

        if(!user){
            return res.status(404).send({message: "User or Password invalid."})
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        
        if(!passwordIsValid){
            return res.status(404).send({message: "User or Password invalid."})
        }
        
        const token = generateToken(user.id);

        return res.send({token});

    } catch(e) {
        return res.status(500).send({message:e.message})
    }
}

export default login;