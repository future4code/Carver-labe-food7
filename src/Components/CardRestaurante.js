import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurant } from "../Routes/Coordinator";

const CardRestaurante = (props) => {
  const history = useHistory();

  return (
    <div>
      <div onClick={() => goToRestaurant(history, props.id)}>
        <img src={props.src} alt={props.name} />
        <p>{props.name}</p>
      </div>
      <p>{props.deliveryTime} min</p>
      <p>Frete R${props.shipping}</p>
    </div>
  );
};

export default CardRestaurante;
