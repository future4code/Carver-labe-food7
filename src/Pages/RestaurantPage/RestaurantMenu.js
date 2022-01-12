import React from "react";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const params = useParams();
  const restaurante = useRequestData(
    {},
    `${BASE_URL}/restaurants/${params.id}`
  );

  const listaProdutos =
    restaurante.restaurant &&
    restaurante.restaurant.products &&
    restaurante.restaurant.products.map((produto) => {
      return (
        <div>
          <img width="200" src={produto.photoUrl} alt={produto.name} />
          <p>{produto.name}</p>
          <p>{produto.description}</p>
          <p>R$ {produto.price}</p>
        </div>
      );
    });

  return (
    <div>
      {listaProdutos}
    </div>
  );
};

export default RestaurantPage;
