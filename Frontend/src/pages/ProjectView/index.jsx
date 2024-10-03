import { useEffect, useState } from 'react';
import {findById} from "../../services/projectServices.js";
import { useProject } from '../../services/ProjectContext.jsx';

import { Preview } from './styles.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import img_Default from "../../assets/Preview_Default.png";
// Icons
import { LuExternalLink} from "react-icons/lu";

function ProjectView() {
  const { projectId } = useProject();
  const [project, setProject] = useState({
    name: "Project X",
    preview: img_Default,
    shortDescription: "Short description",
    description: "Full description",
    link_git: "#",
    link_deploy: "#",
    techs: []
  });

  const findProject = async (id) => {
    try{
      alert("Details Context: " + id)

      // setProject({
      //   name: project.name || "Project X",
      //   preview: project.preview || img_Default,
      //   shortDescription: project.shortDescription || "Short description",
      //   description: project.description || "Full description",
      //   techs: project.techs || [],
      //   link_git: project.link_git || "#",
      //   link_deploy: project.link_deploy || "#"
      // });

    } catch(error) {

    }
  }

  useEffect(() => {
    findProject(projectId);
  },[])

  return (
    <>
      <Preview>
        <h2>Project X</h2>
        <img src={img_Default} alt="" />
        <p className="field">ABC</p>
        <p className="field">ABCDEF</p>
        <div className="field" id="techs_preview">
          <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} sizeicon={60} />
          <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} sizeicon={60} />
        </div>
        <a className="field" href='#'> <LuExternalLink /> See the project</a>
      </Preview>
    </>
  );
}

export default ProjectView;
