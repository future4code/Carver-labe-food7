import axios from "axios";
import { BASE_URL } from "../constants/URL";
import {
  goToHome,
  goToProfile,
  goToSignAddress,
  goToSignUp,
} from "../routes/Coordinator";

import { MessageArea } from "../assets/alert/alert";

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
      MessageArea.fire({title: err.response.data.message, icon: "error"});
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
      MessageArea.fire({title: err.response.data.message, icon: "error"});
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
      MessageArea.fire({title: "Usuário cadastrado com sucesso!",
        background: "#e86e5a",
        color: "#ffffff",
      });
      clear();
      goToHome(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
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
      MessageArea.fire({title: "Perfil atualizado com sucesso!",
        background: "#e86e5a",
        color: "#ffffff",
      });
      goToProfile(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
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
      MessageArea.fire({title: "Endereço atualizado com sucesso!",
        background: "#e86e5a",
        color: "#ffffff",
      });
      goToProfile(history);
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
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
      MessageArea.fire({title: "Pedido realizado com sucesso",
        background: "#e86e5a",
        color: "#ffffff",
      });
      goToHome(history)
    })
    .catch((err) => {
      MessageArea.fire({title: err.response.data.message, icon: "error"});
    });
};
