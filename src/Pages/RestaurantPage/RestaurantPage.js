import React from "react";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Routes/Coordinator";

const RestaurantPage = () => {
  useProtectedPage();
  const params = useParams();
  const restaurante = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`);
  const history = useHistory();

  const categorias =
    restaurante.restaurant &&
    restaurante.restaurant.products &&
    restaurante.restaurant.products.map((produto) => {
      return produto.category;
    });

  const listaCategorias =
    categorias &&
    categorias.filter((item, index) => {
      return categorias.indexOf(item) === index;
    });

  const produtoPorCategoria = (categoria, array) => {
    const filtro = array.filter((item) => item.category === categoria);

    const listaProdutos = filtro.map((produto) => {
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
        {categoria}
        {listaProdutos}
      </div>
    );
  };

  const filtroCategorias = listaCategorias && listaCategorias.map((categoria) => {
      return produtoPorCategoria(categoria, restaurante.restaurant.products);
  });

  return (
    <div>
      <button onClick={() => goToHome(history)}>Voltar</button>
      {restaurante.restaurant && (
        <div>
          <img src={restaurante.restaurant.logoUrl} alt={restaurante.restaurant.name}/>
          <p>{restaurante.restaurant.name}</p>
          <p>{restaurante.restaurant.category}</p>
          <p>{restaurante.restaurant.deliveryTime} min</p>
          <p>Frete R${restaurante.restaurant.shipping}</p>
          <p>{restaurante.restaurant.address}</p>
        </div>
      )}
      {filtroCategorias}
    </div>
  );
};

export default RestaurantPage;
