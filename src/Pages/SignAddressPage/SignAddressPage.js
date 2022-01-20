import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Header from "../../components/Header/header";
import SignAddressForm from "./SignAddressForm";
import { TextSingUp } from "../SignUpPage/styled";

const SignAddressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header />
      <TextSingUp>Meu endereço</TextSingUp>
      <SignAddressForm />
    </div>
  );
};

export default SignAddressPage;
