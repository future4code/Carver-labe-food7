import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { LogoImage, TextSingUp } from "./styled";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import SplashScreen from "../../components/SplashScreem/SplashScreem";
import { LoginContainer, ButtonCadastro } from "./styled";
import { useHistory } from "react-router-dom";
import {goToSignUp} from '../../routes/Coordinator'
import { Button } from "@material-ui/core";

const LoginPage = () => {
  useUnprotectedPage()
  const [loading, setLoading] = useState(true);

const history = useHistory();
  
  return (
    <LoginContainer>
      {loading ? (
        <SplashScreen setLoading={setLoading} />
      ) : (
      <>
      <LogoImage src={"https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/2996043A-2111-4F86-AB91-37474F98621C.svg"} />
      <TextSingUp>Login</TextSingUp>
      <LoginForm />
      </>
      )}
    <ButtonCadastro>  
    <Button onClick={() => goToSignUp(history)}>Não Possui cadastro? Clique aqui.</Button>
    </ButtonCadastro>
    </LoginContainer>
  );
};

export default LoginPage;
