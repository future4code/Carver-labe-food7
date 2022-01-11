import axios from "axios";
import { BASE_URL } from "../Constants/URL";
import { goToHome, goToSignUp } from "../Routes/Coordinator";

export const Login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.getItem("token", res.data.token);
      goToHome(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
      goToSignUp(history);
    });
};

export const SignUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Cadastro Realizado com sucesso!");
      clear();
      goToHome(history);
    })
    .catch((err) => {
      console.log(err);
      alert(
        "Possiveis erros: senha com menos de 8 caracteres, e-mail já criado, senha igual a de outro usuário!"
      );
    });
};
