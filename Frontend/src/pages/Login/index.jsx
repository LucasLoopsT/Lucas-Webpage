import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login } from "../../services/userServices.js";

import Cookies from "js-cookie";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Container, Form } from "../Login/styles.jsx";
import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";

import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    try {
      const response = await login(data.email, data.password);
      setMessage(t("login.success"));
      setErrorMessage(null);
      navigate("/manage");
      Cookies.set("token", response.data.token, { expires: 1 });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
        setMessage(null);
      } else {
        setErrorMessage(t("login.errorGeneric"));
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
        <h2>{t("login.title")}</h2>

        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form id="formulario" onSubmit={handleSubmit(handleLogin)}>
          <Input
            nameField={t("login.user")}
            type="email"
            icon={<FaRegUser />}
            placeholder={t("login.emailPlaceholder")}
            {...register("email")}
          />
          <Input
            nameField={t("login.password")}
            type="password"
            icon={<RiLockPasswordLine />}
            placeholder={t("login.passwordPlaceholder")}
            {...register("password")}
          />
          <Button type="submit" text={t("login.submit")} />
        </form>
      </Form>
    </Container>
  );
}

export default Login;
