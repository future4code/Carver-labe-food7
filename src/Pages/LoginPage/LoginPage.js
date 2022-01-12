import React from "react";
import LoginForm from "./LoginForm";
import { LogoImage, TextSingUp } from "./styled";

const LoginPage = () => {
  return (
    <div>
      <LogoImage src={"https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/2996043A-2111-4F86-AB91-37474F98621C.svg"} />
      <TextSingUp>Login</TextSingUp>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
