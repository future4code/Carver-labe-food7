import React from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/URL";
import { goToEditAdress, goToEditProfile } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/header";
import { Profile, CardHistorico, CardHistoricoContainer, DadosContainer, DadosContainer2, HistoricoContainer } from "./styled";
import { Button } from "@mui/material";
import Editar from "../../assets/icones/edit.svg";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const perfil = useRequestData([], `${BASE_URL}/profile`);
  const pedidos = useRequestData([], `${BASE_URL}/orders/history`);

  const listarPedidos =
    pedidos &&
    pedidos.orders &&
    pedidos.orders.map((pedido) => {
      let converterData = new Date(pedido.createdAt);
      const formatarData = converterData.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      });
      return (
        <CardHistorico>
          <p>{pedido.restaurantName}</p>
          <p>{formatarData}</p>
          <p>SUBTOTAL R${pedido.totalPrice.toFixed(2).replace(".", ",")}</p>
        </CardHistorico>
      );
    });

  return (
    <main>
      <Header title={"Meu Perfil"} />
      <Profile>
        {perfil.user ? (
          <div id={"personalData"}>
            <DadosContainer>
              <div>
                <p id={"nome"}>{perfil.user.name}</p>
                <p id={"email"}>{perfil.user.email}</p>
                <p id={"cpf"}>{perfil.user.cpf}</p>
              </div>
              <Button onClick={() => goToEditProfile(history)}>
                <img src={Editar} alt="ícone editar" />
              </Button>
            </DadosContainer>
            <DadosContainer2>
              <div>
                <p>Endereço cadastrado </p>
                <p id={"endereco"}>{perfil.user.address}</p>
              </div>
              <Button onClick={() => goToEditAdress(history)}>
                <img src={Editar} alt="ícone editar" />
              </Button>
            </DadosContainer2>
          </div>
        ) : (
          <div>Loading..</div>
        )}
        <HistoricoContainer>
        <h3> Histórico de pedidos</h3>
        <CardHistoricoContainer>
          {pedidos.orders ? (
            <div>{listarPedidos}</div>
          ) : (
            <h4>Você ainda não realizou nenhum pedido!</h4>
          )}
        </CardHistoricoContainer>
        </HistoricoContainer>
      </Profile>
      <Menu />
    </main>
  );
};

export default ProfilePage;
