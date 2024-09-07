import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    preview: {
        type: String,
        required: true,
    },
    shortDescription:{
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true,
    },
    techs: {
        type: [String],
        require: true
    },
    link_git: {
        type: String,
        require: true
    },
    link_deploy: {
        type: String,
        require: true
    }
})

const Project = mongoose.model("Project", ProjectSchema);

export default Project;