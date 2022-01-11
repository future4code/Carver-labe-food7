import React from "react";
import { Login } from "../../Services/Access";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const { form, handleInputOnChange } = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    Login(form, history);
  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
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
        <Button fullWidth variant="contained" type="submit">
          <p>Enviar</p>
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
