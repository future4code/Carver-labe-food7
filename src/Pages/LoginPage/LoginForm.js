import React from "react";
import { Login } from "../../services/Access";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonLoginContainer, LoginContainer,TexfieldLogin } from "./styled";


const LoginForm = () => {
  const { form, handleInputOnChange } = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    Login(form, history);
  };

  return (
    <LoginContainer>
     
      <form onSubmit={onSubmitLogin}>
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
          name={"password"}
          value={form.password}
          onChange={handleInputOnChange}
          label={"Senha"}
          type={"password"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        </TexfieldLogin>
       <ButtonLoginContainer>
        <Button fullWidth variant="contained" type="submit">
          <p>Entrar</p>
        </Button>
        </ButtonLoginContainer>
       
      </form>
    </LoginContainer>
  );
};

export default LoginForm;
