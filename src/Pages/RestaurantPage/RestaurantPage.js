import React from "react";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useParams } from "react-router-dom";
import Menu from "./RestaurantMenu";

const RestaurantPage = () => {
  const params = useParams();
  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);

  console.log("restaurantes", restaurantes);

  const renderRestaurant =
    restaurantes.restaurants &&
    restaurantes.restaurants.map((restaurante) => {
      let cardRestaurant;
      if (restaurante.id === params.id) {
        cardRestaurant = (
          <div key={restaurante.id}>
            <img src={restaurante.logoUrl} alt={restaurante.name} />
            <p>{restaurante.name}</p>
            <p>{restaurante.category}</p>
            <p>{restaurante.deliveryTime} min</p>
            <p>Frete R${restaurante.shipping}</p>
            <p>{restaurante.address}</p>
          </div>
        );
      }
      return cardRestaurant;
    });

  return (
    <div>
      {renderRestaurant}
      <Menu />
    </div>
  );
};

export default RestaurantPage;
