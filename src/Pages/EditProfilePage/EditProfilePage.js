import React from "react";
import EditProfileForm from "./EditProfileForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Header from "../../components/Header/header";

const EditProfilePage = () => {
  useProtectedPage();

  return (
    <div>
      <Header title={"Editar"} />
      <EditProfileForm />
    </div>
  );
};

export default EditProfilePage;
