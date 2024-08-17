import { useEffect, useState } from 'react';
import { Container, Preview, Form } from '../ManageProject/styles.jsx';
import Header from '../../components/Header/index.jsx';
import Input from '../../components/Input/index.jsx';
import Textarea from '../../components/Textarea/index.jsx';
import Button from '../../components/Button/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import img_Default from "../../assets/Preview_Default.png"

// Icons
import { FaRegImage, FaLink } from "react-icons/fa6";
import { LuPencil, LuText } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";

function ManageProject() {
  const [action, setAction] = useState('');

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  return (
    <Container>
      <Header />

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
              <p className="description">ABC</p>
              <p className="description">ABCDEF</p>
            </div>
          </Preview>
          <form id="formulario">
            <div className="div_Select">
              <label htmlFor='action'>Action</label>
              <select required id="action" name="action" value={action} onChange={handleActionChange}>
                <option disabled value="">Select</option>
                <option value="Create">Create</option>
                <option value="Update">Update</option>
                <option value="Delete">Delete</option>
              </select>
            </div>
            {action === "Update" || action === "Delete" && (
              <div className="div_Select">
                <label htmlFor='AllProjects'>Select the project</label>
                <select id="AllProjects" name="AllProjects">
                  <option>Project 1</option>
                  <option>Project 2</option>
                  <option>Project 3</option>
                </select>
              </div>
            )}
            {action != "Delete" && (
              <>
                <Input name={"Project Name"} type={"text"} icon={<LuPencil />} placeholder={"Project X."} />
                <Input name={"Project Image"} type={"text"} icon={<FaRegImage />} placeholder={"Url."} />
                <Input name={"Short Description"} type={"text"} icon={<LuText />} placeholder={"What is this project for?"} />
                <Textarea name={"Description"} icon={<CgNotes />} placeholder={"Here you can write more about this project."} />
                <Input name={""} type={"text"} icon={<FaLink />} placeholder={"Repository link."} />
                <Button type={'submit'} text={'Preview'} />
              </>
            )}
          </form>
        </div>
        <Button type={'submit'} text={'Send'} />
      </Form>

      <Footer />
    </Container>
  );
}

export default ManageProject;
