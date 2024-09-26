import { useState } from 'react'; // Adicione useState
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
  email: z.string().nonempty("O e-mail é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória"),
});

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null); // Estado para armazenar mensagem de erro

  // useForm para gerenciar o formulário e validação
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  const handleLogin = async (data) => {
    try {
      const response = await login(data.email, data.password);
      console.log("Login bem-sucedido:", response);
      navigate("/manage");
      Cookies.set('token', response.data.token, {expires: 1});
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Ocorreu um erro ao fazer login.");
        }
    }
  };

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