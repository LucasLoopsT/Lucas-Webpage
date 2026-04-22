import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import {
  create,
  findAll,
  update,
  deleteProject,
} from "../../services/projectServices.js";

import { Container, Preview, Form } from "../ManageProject/styles.jsx";
import Input from "../../components/Input/index.jsx";
import Textarea from "../../components/Textarea/index.jsx";
import MultiSelect from "../../components/MultiSelect/index.jsx";
import Button from "../../components/Button/index.jsx";
import TechIcons from "../../components/TechIcons/index.jsx";
import img_Default from "../../assets/Preview_Default.png";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Icons
import { FaRegImage, FaRegStar, FaLink, FaGithub } from "react-icons/fa6";
import { LuExternalLink, LuPencil, LuText } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";

const projectSchema = z.object({
  name: z.string(),
  preview: z.string(),
  priority: z.union([z.string().transform((val) => parseInt(val)), z.number()]),
  shortDescription: z.string(),
  description: z.string(),
  link_git: z.string(),
  link_deploy: z.string(),
  techs: z.array(z.string()),
});

const techsList = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JS", icon: "js" },
  { name: "React", icon: "react" },
  { name: "Vite", icon: "vite" },
  { name: "NodeJS", icon: "nodejs" },
  { name: "MySQL", icon: "mysql" },
  { name: "Mongo", icon: "mongo" },
];

function ManageProject() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [selectedProjectID, setSelectedProjectID] = useState(null);
  const [previewData, setPreviewData] = useState({
    name: "Project X",
    preview: img_Default,
    shortDescription: "Short description",
    description: "Full description",
    link_git: "#",
    link_deploy: "#",
    techs: [],
  });
  const [action, setAction] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const token = Cookies.get("token");

  const { register, handleSubmit, setValue, reset, getValues, control } =
    useForm({
      resolver: zodResolver(projectSchema),
    });

  const handleActionChange = (e) => {
    setAction(e.target.value);
    setSelectedProjectID("");
    setPreviewData({
      name: "Project X",
      preview: img_Default,
      shortDescription: "Short description",
      description: "Full description",
      link_git: "#",
      link_deploy: "#",
      techs: [],
    });
    findAllProjects();
    reset();
  };

  const handlePreview = () => {
    const formData = getValues();

    setPreviewData({
      name: formData.name || "Project X",
      preview: formData.preview || img_Default,
      shortDescription: formData.shortDescription || "Short description",
      description: formData.description || "Full description",
      techs: formData.techs || [],
      link_git: formData.link_git || "#",
      link_deploy: formData.link_deploy || "#",
    });
  };

  const findAllProjects = async () => {
    try {
      const response = await findAll();
      setProjects(response.data);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(t("manage.fetchError"));
      }
    }
  };

  const handleSelectProject = (event) => {
    const id = event.target.value;
    setSelectedProjectID(id);
    const project = projects.find((p) => p._id === id);

    if (project != null) {
      setValue("name", project.name);
      setValue("preview", project.preview);
      setValue("priority", project.priority);
      setValue("shortDescription", project.shortDescription);
      setValue("description", project.description);
      setValue("link_git", project.link_git);
      setValue("link_deploy", project.link_deploy);
      setValue("techs", project.techs);
    }
    handlePreview();
  };

  const handleSendProject = async (data) => {
    try {
      if (action === "Create") {
        await create(
          token,
          data.name,
          data.preview,
          data.priority,
          data.shortDescription,
          data.description,
          data.techs,
          data.link_git,
          data.link_deploy,
        );
        setMessage(t("manage.created", { name: data.name }));
        setErrorMessage(null);
        handlePreview();

        reset();
      } else if (action === "Update") {
        const project = await update(
          token,
          selectedProjectID,
          data.name,
          data.preview,
          data.priority,
          data.shortDescription,
          data.description,
          data.techs,
          data.link_git,
          data.link_deploy,
        );
        setMessage(project.data.message);
        setErrorMessage(null);
      } else if (action === "Delete") {
        const project = await deleteProject(token, selectedProjectID);
        setMessage(project.data.message);
        setErrorMessage(null);
        reset();
        findAllProjects();
        handlePreview();
      } else {
        setErrorMessage(t("manage.functionNotFound"));
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
        setMessage(null);
      } else {
        setErrorMessage(t("manage.projectProcessingError"));
        setMessage(null);
      }
    }
  };

  useLayoutEffect(() => {
    if (errorMessage || message) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
        setMessage(null);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, message]);

  useEffect(() => {
    findAllProjects();
  }, []);

  return (
    <Container>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {message && <p className="message">{message}</p>}

      <Form className="Section">
        <div className="title">
          <h2>{t("manage.title")}</h2>
          <p>{t("manage.subtitle")}</p>
        </div>
        <div id="content">
          <Preview>
            <div id="img_preview">
              <>
                <h3>{previewData.name}</h3>
                <img src={previewData.preview} alt={previewData.name} />
                <p className="field">{previewData.shortDescription}</p>
                <p className="field">{previewData.description}</p>
                {previewData.techs.length > 0 ? (
                  <div className="field" id="techs_preview">
                    {previewData.techs.map((tech) => (
                      <TechIcons
                        key={tech}
                        imgurl={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
                        sizeicon={40}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="field">{t("manage.techsLabel")}</p>
                )}
                <a
                  className="field"
                  href={previewData.link_git}
                  target="_blank"
                >
                  <FaGithub /> {t("manage.seeRepo")}
                </a>
                <a
                  className="field"
                  href={previewData.link_deploy}
                  target="_blank"
                >
                  <LuExternalLink /> {t("manage.seeProject")}
                </a>
              </>
            </div>
            <Button
              type={"button"}
              text={t("manage.preview")}
              onClick={handlePreview}
            />
          </Preview>
          <form id="formulario" onSubmit={handleSubmit(handleSendProject)}>
            <div className="div_Select">
              <label htmlFor="action">{t("manage.action")}</label>
              <select
                id="action"
                name="action"
                value={action}
                onChange={handleActionChange}
                required
              >
                <option value="" disabled>
                  {t("manage.select")}
                </option>
                <option value="Create">{t("manage.create")}</option>
                <option value="Update">{t("manage.update")}</option>
                <option value="Delete">{t("manage.delete")}</option>
              </select>
            </div>

            {(action === "Update" || action === "Delete") && (
              <div className="div_Select">
                <label htmlFor="AllProjects">{t("manage.selectProject")}</label>
                <select
                  id="AllProjects"
                  name="AllProjects"
                  value={selectedProjectID}
                  onChange={handleSelectProject}
                  required
                >
                  <option value="" disabled>
                    {t("manage.select")}
                  </option>
                  {projects.map((project) => (
                    <option key={project._id} value={project._id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {(action === "Create" || action === "Update") && (
              <>
                <Input
                  nameField={t("manage.projectName")}
                  type={"text"}
                  icon={<LuPencil />}
                  placeholder={t("manage.namePlaceholder")}
                  {...register("name")}
                />
                <Input
                  nameField={t("manage.projectImage")}
                  type={"text"}
                  icon={<FaRegImage />}
                  placeholder={t("manage.urlPlaceholder")}
                  {...register("preview")}
                />
                <Input
                  nameField={t("manage.projectPriority")}
                  type={"number"}
                  icon={<FaRegStar />}
                  placeholder={t("manage.priorityPlaceholder")}
                  {...register("priority")}
                />
                <Input
                  nameField={t("manage.shortDescription")}
                  type={"text"}
                  icon={<LuText />}
                  placeholder={t("manage.shortDescPlaceholder")}
                  {...register("shortDescription")}
                />
                <Textarea
                  nameField={t("manage.description")}
                  icon={<CgNotes />}
                  placeholder={t("manage.descPlaceholder")}
                  {...register("description")}
                />
                <Input
                  nameField={t("manage.projectRepo")}
                  type={"text"}
                  icon={<FaGithub />}
                  placeholder={t("manage.repoPlaceholder")}
                  {...register("link_git")}
                />
                <Input
                  nameField={t("manage.deployLink")}
                  type={"text"}
                  icon={<FaLink />}
                  placeholder={t("manage.deployPlaceholder")}
                  {...register("link_deploy")}
                />
                <Controller
                  name="techs"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <MultiSelect
                      id="techs"
                      title={t("manage.technologies")}
                      placeholder={t("manage.techPlaceholder")}
                      options={techsList.map((tech) => ({
                        id: tech.name,
                        text: tech.name,
                      }))}
                      value={field.value}
                      setValue={field.onChange}
                    />
                  )}
                />
              </>
            )}
            {action === "Create" && (
              <Button type={"submit"} text={t("manage.create")} />
            )}
            {action === "Update" && (
              <Button type={"submit"} text={t("manage.update")} />
            )}
            {action === "Delete" && (
              <Button type={"submit"} text={t("manage.delete")} />
            )}
          </form>
        </div>
      </Form>
    </Container>
  );
}

export default ManageProject;
