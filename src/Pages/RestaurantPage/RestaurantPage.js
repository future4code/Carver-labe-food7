import React from "react";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useParams } from "react-router-dom";
import { useProtectedPage } from '../../Hooks/useProtectedPage';

const RestaurantPage = () => {
  useProtectedPage();
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
      {restaurante.restaurant && (
        <div>
          <img src={restaurante.restaurant.logoUrl} alt={restaurante.restaurant.name} />
            <p>{restaurante.restaurant.name}</p>
            <p>{restaurante.restaurant.category}</p>
            <p>{restaurante.restaurant.deliveryTime} min</p>
            <p>Frete R${restaurante.restaurant.shipping}</p>
            <p>{restaurante.restaurant.address}</p>
        </div>
      )}
      {listaProdutos}
    </div>
  );
};

export default RestaurantPage;
