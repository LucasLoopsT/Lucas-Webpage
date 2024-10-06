import Project from "../models/project.models.js";

class Services{
    create = (body) => Project.create(body);
    findAll = () => Project.find();
    findById = (id) => Project.findById(id);
    update = (id, name, preview, priority, shortDescription, description, techs, link_git, link_deploy) => Project.findByIdAndUpdate({_id: id}, {name, preview, priority, shortDescription, description, techs, link_git, link_deploy});
    delete = (id) => Project.deleteOne({_id: id});
}

export default Services;