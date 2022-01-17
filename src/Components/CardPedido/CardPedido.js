import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/URL";
import { useRequestData } from "../../hooks/useRequestData";
import { MainContainer, Titulo } from "./styled";
import Relogio from "../../assets/icones/clock.svg";

const CardPedido = () => {
  useProtectedPage();
  const pedido = useRequestData({}, `${BASE_URL}/active-order`);

  return (
    <>
      {pedido && pedido.order && (
        <MainContainer>
          <img src={Relogio} alt="ícone relógio" />
          <div>
            <Titulo>Pedido em andamento</Titulo>
            <p>{pedido.order.restaurantName}</p>
            <p>
              SUBTOTAL R${pedido.order.totalPrice.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </MainContainer>
      )}
    </>
  );
};

export default CardPedido;
