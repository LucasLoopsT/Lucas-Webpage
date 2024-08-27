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
        <h2>Login</h2>
        <form id="formulario">
          <Input name={"User"} type={"text"} icon={<FaRegUser/>} placeholder={"Email@email.com"}/>
          <Input name={"Password"} type={"password"} icon={<RiLockPasswordLine/>} placeholder={"12345678"}/>
          <Button type={'submit'} text={'Send'} />
        </form>
      </Form>
      
      <Footer />
    </Container>
  );
}

export default Login;
