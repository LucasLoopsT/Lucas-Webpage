import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../../services/userServices.js";

import Cookies from "js-cookie";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // Validador de esquema

import { Container, Form } from '../Login/styles.jsx';
import Input from '../../components/Input/index.jsx';
import Button from '../../components/Button/index.jsx';

import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

// Esquema de validação usando Zod
const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null); 
  const [message, setMessage] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  const handleLogin = async (data) => {
    try {
      const response = await login(data.email, data.password);
      setMessage("Login bem-sucedido:", response);
      setErrorMessage(null);
      navigate("/manage");
      Cookies.set('token', response.data.token, {expires: 1});
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
          setMessage(null);
        } else {
          setErrorMessage("Error on login user");
          setMessage(null);
        }
    }
  };

  useEffect(() => {
    if (errorMessage || message) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
        setMessage(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage, message]);

  return (
    <Container>
      <Form className="Section">
        <h2>Login</h2>
        
        {errors.email && <p className="error-message">{errors.email.message}</p>}
        {errors.password && <p className="error-message">{errors.password.message}</p>}        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
 
        <form id="formulario" onSubmit={handleSubmit(handleLogin)}>
          <Input
            name="User"
            type="email"
            icon={<FaRegUser />}
            placeholder="Email@email.com"
            {...register("email")}
          />
          <Input
            name="Password"
            type="password"
            icon={<RiLockPasswordLine />}
            placeholder="12345678"
            {...register("password")}
          />
          <Button type="submit" text="Login" />
        </form>
      </Form>
    </Container>
  );
}

export default Login;