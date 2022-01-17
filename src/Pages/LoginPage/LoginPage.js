import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { LogoImage, TextSingUp } from "./styled";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import SplashScreen from "../../components/SplashScreem/SplashScreem";
import { LoginContainer, ButtonCadastro } from "./styled";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/Coordinator";
import Button from "@mui/material/Button";
import LogoColorida from "../../assets/icones/logo-future-eats-invert.svg";

const LoginPage = () => {
  useUnprotectedPage();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  return (
    <LoginContainer>
      {loading ? (
        <SplashScreen setLoading={setLoading} />
      ) : (
        <>
          <LogoImage 
            src={LogoColorida}
          />
          <TextSingUp>Entrar</TextSingUp>
          <LoginForm />
        </>
      )}
      <ButtonCadastro>
        <Button onClick={() => goToSignUp(history)}>
          Não Possui cadastro? Clique aqui.
        </Button>
      </ButtonCadastro>
    </LoginContainer>
  );
};

export default LoginPage;
