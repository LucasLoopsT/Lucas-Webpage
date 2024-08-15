import { useEffect, useState } from 'react';
import { Container, Form } from '../Login/styles.jsx';
import Header from '../../components/Header/index.jsx';
import Input from '../../components/Input/index.jsx';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from '../../components/Button/index.jsx';
import Footer from '../../components/Footer/index.jsx';

function Login() {
  return (
    <Container>
      <Header />

      <Form className="Section">
        <div className="title">
        <h2>Projects</h2>
          <p>Check it out some projects that i made or participate! I'm sure you will enjoy.</p>
        </div>
        <div id="formulario">
          <Input name={"User"} type={"text"} icon={<FaRegUser/>}/>
          <Input name={"Password"} type={"password"} icon={<RiLockPasswordLine/>}/>
          <Button type={'submit'} text={'Enviar'} />
        </div>
      </Form>
      
      <Footer />
    </Container>
  );
}

export default Login;
