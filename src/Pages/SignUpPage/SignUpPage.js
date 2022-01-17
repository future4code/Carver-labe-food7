import React from "react";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { TextSingUp, LogoImage, SingUpContainer } from "../SignUpPage/styled";
import Header from "../../components/Header/header";
import LogoColorida from "../../assets/icones/logo-future-eats-invert.svg";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <SingUpContainer>
      <Header />
      <LogoImage src={LogoColorida} />
      <TextSingUp> Cadastrar </TextSingUp>
      <SignUpForm />
    </SingUpContainer>
  );
};

export default SignUpPage;
