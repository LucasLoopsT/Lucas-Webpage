import { useEffect, useState } from 'react';
import {findById} from "../../services/projectServices.js";
import Cookies from 'js-cookie';

import { Preview } from './styles.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import img_Default from "../../assets/Preview_Default.png";
// Icons
import { LuExternalLink} from "react-icons/lu";
import { FaGithub} from "react-icons/fa";

function ProjectView() {
  const [project, setProject] = useState({
    name: "Project X",
    preview: img_Default,
    shortDescription: "Short description",
    description: "Full description",
    link_git: "#",
    link_deploy: "#",
    techs: []
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const findProject = async (id) => {
    try{
      const project = await findById(id);

      setProject({
        name: project.data.name || "Project X",
        preview: project.data.preview || img_Default,
        shortDescription: project.data.shortDescription || "Short description",
        description: project.data.description || "Full description",
        techs: project.data.techs || [],
        link_git: project.data.link_git || "#",
        link_deploy: project.data.link_deploy || "#"
      });

    } catch(error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Project not found.");
      }
    }
  }

  useEffect(() => {
    const projectId = Cookies.get("projectId")
    
    if (!projectId) {
      setErrorMessage("Project not found.");
    } else {
      findProject(projectId);
    }
  }, []);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <>
      <Preview>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <h2>{project.name}</h2>
        <img src={project.preview} alt={project.name}/>
        <p className="field">{project.shortDescription}</p>
        <p className="field">{project.description}</p>
        <div className="field" id="techs_preview">
          {project.techs.map((tech) => (
            <TechIcons key={tech} imgurl={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`} sizeicon={60} />
          ))}
        </div>
        <a className="field" href={project.link_deploy}> <LuExternalLink /> See the project</a>
        <a className="field" href={project.link_git}> <FaGithub /> See the repository </a>
      </Preview>
    </>
  );
}

export default ProjectView;
