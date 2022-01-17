import Menu from "../../components/Menu/Menu";
import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToProfile } from "../../routes/Coordinator";
import EditAddressForm from "./EditAdressForm";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/header'
import { Button } from "@mui/material";
import {EditAddressContainer} from './styled'

const EditAdressPage = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => goToProfile(history)}><img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/4FC8F2F3-EE15-457A-B114-9A92B2A97C8A.svg"></img></Button>
      <Header title={"Editar Endereço"} />
      <EditAddressContainer>
      <EditAddressForm />
      </EditAddressContainer>
           
    </div>
  );
};

export default EditAdressPage;
