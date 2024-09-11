import User from "../models/user.models.js";

export class Services {
    create = (body) => User.create(body);
    findAll = () => User.find();
    findById = (id) => User.findById(id);
    update = (id, name, email, password) => User.findByIdAndUpdate({_id: id}, {name,  email, password});
    delete = (id) => User.deleteOne({_id: id});

}

export default Services;