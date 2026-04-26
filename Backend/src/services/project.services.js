import Project from "../models/project.models.js";

const PROJECT_UPDATE_KEYS = [
    "name",
    "preview",
    "priority",
    "shortDescription",
    "description",
    "name_en",
    "shortDescription_en",
    "description_en",
    "techs",
    "link_git",
    "link_deploy",
];

function pickDefinedUpdateFields(body) {
    const update = {};
    for (const key of PROJECT_UPDATE_KEYS) {
        if (body[key] !== undefined) {
            update[key] = body[key];
        }
    }
    return update;
}

class Services{
    create = (body) => Project.create(body);
    findAll = () => Project.find();
    findById = (id) => Project.findById(id);
    update = (id, body) =>
        Project.findByIdAndUpdate({ _id: id }, pickDefinedUpdateFields(body), {
            new: true,
        });
    delete = (id) => Project.deleteOne({_id: id});
}

export default Services;