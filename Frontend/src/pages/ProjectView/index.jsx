import { useEffect, useState } from 'react';
import { Preview } from './styles.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import img_Default from "../../assets/Preview_Default.png"
// Icons
import { LuExternalLink} from "react-icons/lu";

function ProjectView() {
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
