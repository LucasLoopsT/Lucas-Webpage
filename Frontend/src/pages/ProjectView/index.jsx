import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { findById } from "../../services/projectServices.js";
import { getLocalizedProjectTexts } from "../../utils/projectLocale.js";
import Cookies from "js-cookie";

import { Preview } from "./styles.jsx";
import TechIcons from "../../components/TechIcons/index.jsx";
import img_Default from "../../assets/Preview_Default.png";
// Icons
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const emptyTexts = {
  name: "Project X",
  shortDescription: "Short description",
  description: "Full description",
};

function ProjectView() {
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const texts = project
    ? getLocalizedProjectTexts(project, i18n.language)
    : emptyTexts;

  const findProject = async (id) => {
    try {
      const res = await findById(id);
      setProject(res.data);
      setErrorMessage(null);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(t("projectView.notFound"));
      }
      setProject(null);
    }
  };

  useEffect(() => {
    const projectId = Cookies.get("projectId");

    if (!projectId) {
      setErrorMessage(t("projectView.notFound"));
    } else {
      findProject(projectId);
    }
  }, []);

  const preview = project?.preview || img_Default;
  const techs = project?.techs ?? [];
  const link_git = project?.link_git || "#";
  const link_deploy = project?.link_deploy || "#";

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
        <h2>{texts.name}</h2>
        <div id="img_preview">
          <img src={preview} alt={texts.name} />
        </div>
        <p className="field">{texts.shortDescription}</p>
        <p
          className="field"
          dangerouslySetInnerHTML={{ __html: texts.description }}
        ></p>
        <div className="field" id="techs_preview">
          {techs.map((tech) => (
            <TechIcons
              key={tech}
              imgurl={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
              sizeicon={60}
            />
          ))}
        </div>
        <a
          className="field"
          href={link_deploy}
          target="_blank"
          rel="noreferrer"
        >
          <LuExternalLink /> {t("projectView.seeProject")}
        </a>
        <a className="field" href={link_git} target="_blank" rel="noreferrer">
          <FaGithub /> {t("projectView.seeRepo")}
        </a>
      </Preview>
    </>
  );
}

export default ProjectView;
