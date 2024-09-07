import User from "../models/user.models.js";

const loginService = (email) => User.findOne({email:email}).select("+password");

export default loginService;