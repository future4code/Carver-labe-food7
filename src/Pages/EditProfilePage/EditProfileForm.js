import React from "react";
import { EditProfile } from "../../Services/Access";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonLoginContainer, LoginContainer, TexfieldLogin } from "./styled";
import { primaryColor } from "../../Constants/colors";

const EditProfileForm = () => {
  const { form, handleInputOnChange} = useForm({name: "", email: "", cpf:"" });
  const history = useHistory();

  const onSubmitAddress = (event) => {
    event.preventDefault();
    EditProfile(form, history);
  };

  return (
    <LoginContainer>
     
      <form onSubmit={onSubmitAddress}>
        <TexfieldLogin>
        <TextField
          name={"name"}
          value={form.name}
          onChange={handleInputOnChange}
          label={"Nome"}
          type={"text"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
       </TexfieldLogin>
       <TexfieldLogin>
        <TextField
          name={"email"}
          value={form.email}
          onChange={handleInputOnChange}
          label={"E-mail"}
          type={"email"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        </TexfieldLogin>
        <TexfieldLogin>
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={handleInputOnChange}
          label={"CPF:000.000.000-00"}
          type={"cpf"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        </TexfieldLogin>
       <ButtonLoginContainer>
        <Button fullWidth variant="contained" type="submit">
          <p>Salvar</p>
        </Button>
        </ButtonLoginContainer>
       
      </form>
    </LoginContainer>
  );
};

export default EditProfileForm ;