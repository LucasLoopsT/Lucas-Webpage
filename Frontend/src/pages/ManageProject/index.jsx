import { useEffect, useState } from 'react';
import { Container, Preview, Form } from '../ManageProject/styles.jsx';
import Input from '../../components/Input/index.jsx';
import Textarea from '../../components/Textarea/index.jsx';
import Button from '../../components/Button/index.jsx';
import TechIcons from '../../components/TechIcons/index.jsx';
import img_Default from "../../assets/Preview_Default.png"

// Icons
import { FaRegImage, FaLink } from "react-icons/fa6";
import { LuExternalLink , LuPencil, LuText } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";

function ManageProject() {
  const [action, setAction] = useState('');

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  return (
    <Container>
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
              <a className="field" href='#'> <LuExternalLink  /> See the project</a>
            </div>
          </Preview>

          <form id="formulario">
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
                <select id="AllProjects" name="AllProjects">
                  <option>Project 1</option>
                  <option>Project 2</option>
                  <option>Project 3</option>
                </select>
              </div>
            )}
            
            {(action === "Create" || action === "Update") && (
              <>
                <Input name={"Project Name"} type={"text"} icon={<LuPencil />} placeholder={"Project X."} />
                <Input name={"Project Image"} type={"text"} icon={<FaRegImage />} placeholder={"Url."} />
                <Input name={"Short Description"} type={"text"} icon={<LuText />} placeholder={"What is this project for?"} />
                <Textarea name={"Description"} icon={<CgNotes />} placeholder={"Here you can write more about this project."} />
                <Input name={"Project Link"} type={"text"} icon={<FaLink />} placeholder={"Repository link."} />
                <ul id="techs_checkbox_list">
                  <div className="tech_check">
                    <Input name={"HTML"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=html"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"CSS"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=css"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"JS"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=js"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"React"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=react"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"Vite"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=vite"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"NodeJS"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=nodejs"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"MySQL"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=mysql"} sizeicon={40} />
                  </div>
                  <div className="tech_check">
                    <Input name={"Mongo"} type={"checkbox"} />
                    <TechIcons imgurl={"https://skillicons.dev/icons?i=mongo"} sizeicon={40} />
                  </div>
                </ul>
                <Button type={'submit'} text={'Preview'} />
              </>
            )}
          </form>
        </div>
        {action === "Create" && (
          <Button type={'submit'} text={'Create'} />
        )}
        {action === "Update" && (
          <Button type={'submit'} text={'Update'} />
        )}
        {action === "Delete" && (
          <Button type={'submit'} text={'Delete'} />
        )}
      </Form>
    </Container>
  );
}

export default ManageProject;
