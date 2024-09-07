import Project from "../models/project.models.js";

class Services{
    create = (body) => Project.create(body);
    findAll = () => Project.find();
    findById = (id) => Project.findById(id);
    update = (id, name, preview, shortDescription, description, techs, link_git, link_deploy) => Project.findByIdAndUpdate({_id: id}, {name, preview, shortDescription, description, techs, link_git, link_deploy});
    delete = (id) => Project.deleteOne(id);
}

export default Services;