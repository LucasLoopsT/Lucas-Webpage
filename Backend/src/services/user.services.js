import User from "../models/user.models.js";

export class Services {
    create = (body) => User.create(body);
    findAll = () => User.find();
    findByEmail = (body) => User.findByEmail(body);
    update = (body) => User.create(body);

}

export default Services;