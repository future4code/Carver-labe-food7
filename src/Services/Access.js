import axios from "axios";
import { BASE_URL } from "../constants/URL";
import {
  goToHome,
  goToProfile,
  goToSignAddress,
  goToSignUp,
} from "../routes/Coordinator";

export const Login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.user.hasAddress === false) {
        goToSignAddress(history);
      } else {
        goToHome(history);
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
      if (err.response.data.message === "Usuário não encontrado") {
        goToSignUp(history);
      }
    });
};

export const SignUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToSignAddress(history);
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data.message);
    });
};

export const SignAddress = (body, clear, history) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Usuário cadastrado com sucesso!");
      clear();
      goToHome(history);
    })
    .catch((err) => {
      console.log(err.response.data.message);
      alert("Ocorreu um erro! Tente novamente!");
    });
};

export const EditProfile = (body, history) => {
  axios
    .put(`${BASE_URL}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data.user);
      alert("Perfil atualizado com sucesso!");
      goToProfile(history);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const EditAddress = (body, history) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Endereço atualizado com sucesso!");
      goToProfile(history);
    })
    .catch((err) => {
      console.log(err.message);
      alert("Ocorreu um erro! Tente novamente!");
    });
};

export const PlaceOrder = (body, id, setData, history) => {
  axios
    .post(`${BASE_URL}/restaurants/${id}/order`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setData(res.data);
      alert("Pedido realizado com sucesso")
      goToHome(history)
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
