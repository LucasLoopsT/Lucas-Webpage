import { act, useEffect, useLayoutEffect, useState } from 'react';
import Cookies from "js-cookie";
import { create, findAll, update } from "../../services/projectServices.js"

import { Container, Preview, Form } from '../ManageProject/styles.jsx';
import Input from '../../components/Input/index.jsx';
import Textarea from '../../components/Textarea/index.jsx';
import Button from '../../components/Button/index.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import img_Default from "../../assets/Preview_Default.png"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Icons
import { FaRegImage, FaLink, FaGithub } from "react-icons/fa6";
import { LuExternalLink, LuPencil, LuText } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";

const projectSchema = z.object({
  name: z.string(),
  preview: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  link_git: z.string(),
  link_deploy: z.string(),
  techs: z.array(z.string()),
});

function ManageProject() {
  const [projects, setProjects] = useState([]); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [action, setAction] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const token = Cookies.get("token");

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handlePreview = () => {
    alert("project preview");
  }

  const findAllProjects = async () => {
    try {
      const response = await findAll();
      setProjects(response.data)
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log(error.response.data.message);
      } else {
        console.log("Erro ao buscar projetos.");
      }
    }
  };

  const handleSelectProject = (event) => {
    const projectId = event.target.value;
    const project = projects.find(p => p._id === projectId);
    setSelectedProject(projectId);

    if (project) {      
      setValue("name", project.name);
      setValue("preview", project.preview);
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
        const project = await create(token, data.name, data.preview, data.shortDescription, data.description, data.techs, data.link_git, data.link_deploy);
        setMessage(`Created: ${data.name}`);
        setErrorMessage(null);

        reset();

      } else if (action === "Update") {
        const project = await update(token, selectedProject, data.name, data.preview, data.shortDescription, data.description, data.techs, data.link_git, data.link_deploy);
        setMessage(project.data.message);
        setErrorMessage(null);

      } else if (action === "Delete") {
        console.log(action);

      } else {
        console.log("função não encontrada");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setMessage(null);
      } else {
        setErrorMessage(`Ocorreu um erro ao executar o ${action} do projeto.`);
        setMessage(null);
      }
    }
  }

  useLayoutEffect(() => {
    if (errorMessage || message) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
        setMessage(null);
      }, 5000);

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
          <h2>Manage Projects</h2>
          <p>Select an existing project to edit and update it or create another one to share on the main page!</p>
        </div>
        <div id="content">
          <Preview>
            <div id="img_preview">
              <h3>Project X</h3>
              <img src={img_Default} alt="" />
              <p className="field">ABC</p>
              <p className="field">ABCDEF</p>
              <div className="field" id="techs_preview">
                <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} sizeicon={40} />
                <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} sizeicon={40} />
              </div>
              <a className="field" href='#'> <FaGithub /> See the repository</a>
              <a className="field" href='#'> <LuExternalLink /> See the project</a>
            </div>
            {(action != "Delete") && (
              <Button type={'submit'} text={'Preview'} onClick={handlePreview} />
            )}
          </Preview>

          <form id="formulario" onSubmit={handleSubmit(handleSendProject)}>
            <div className="div_Select">
              <label htmlFor='action'>Action</label>
              <select required id="action" name="action" value={action} onChange={handleActionChange}>
                <option value="" disabled>Select</option>
                <option value="Create">Create</option>
                <option value="Update">Update</option>
                <option value="Delete">Delete</option>
              </select>
            </div>

            {(action === "Update" || action === "Delete") && (
              <div className="div_Select">
                <label htmlFor='AllProjects'>Select the project</label>
                <select id="AllProjects" name="AllProjects" onChange={handleSelectProject}>
                  <option value="" disabled selected>Select</option>
                  {projects.map((project) => (
                    <option value={project._id}>{project.name}</option>
                  ))}
                </select>
              </div>
            )}

            {(action === "Create" || action === "Update") && (
              <>
                <Input
                  nameField={"Project Name"}
                  type={"text"}
                  icon={<LuPencil />}
                  placeholder={"Project X."}
                  {...register("name")}
                />
                <Input
                  nameField={"Project Image"}
                  type={"text"}
                  icon={<FaRegImage />}
                  placeholder={"Url."}
                  {...register("preview")}
                />
                <Input
                  nameField={"Short Description"}
                  type={"text"}
                  icon={<LuText />}
                  placeholder={"What is this project for?"}
                  {...register("shortDescription")}
                />
                <Textarea
                  nameField={"Description"}
                  icon={<CgNotes />}
                  placeholder={"Here you can write more about this project."}
                  {...register("description")}
                />
                <Input
                  nameField={"Project Repository"}
                  type={"text"}
                  icon={<FaGithub />}
                  placeholder={"Repository link."}
                  {...register("link_git")}
                />
                <Input
                  nameField={"Deploy Link"}
                  type={"text"}
                  icon={<FaLink />}
                  placeholder={"Repository link."}
                  {...register("link_deploy")}
                />
                <ul id="techs_checkbox_list">
                  <div className="tech_check">
                    <Input
                      nameField={"HTML"}
                      type={"checkbox"}
                      value="HTML"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"CSS"}
                      type={"checkbox"}
                      value="CSS"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"JS"}
                      type={"checkbox"}
                      value="JS"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"React"}
                      type={"checkbox"}
                      value="React"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"Vite"}
                      type={"checkbox"}
                      value="Vite"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"NodeJS"}
                      type={"checkbox"}
                      value="NodeJS"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"MySQL"}
                      type={"checkbox"}
                      value="MySQL"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input
                      nameField={"Mongo"}
                      type={"checkbox"}
                      value="Mongo"
                      {...register("techs")}
                    />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} sizeicon={40} />
                  </div>
                </ul>
              </>
            )}
            {action === "Create" && (
              <Button type={'submit'} text={'Create'} />
            )}
            {action === "Update" && (
              <Button type={'submit'} text={'Update'} />
            )}
            {action === "Delete" && (
              <Button type={'submit'} text={'Delete'} />
            )}
          </form>
        </div>
      </Form>
    </Container>
  );
}

export default ManageProject;
