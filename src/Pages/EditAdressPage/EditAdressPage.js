import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import EditAddressForm from "./EditAdressForm";
import Header from "../../components/Header/header";
import { EditAddressContainer } from "./styled";

const EditAdressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header title={"Editar Endereço"} />
      <EditAddressContainer>
        <EditAddressForm />
      </EditAddressContainer>
    </div>
  );
};

export default EditAdressPage;
