import React, { useContext, useState } from "react";
import { BASE_URL } from "../../constants/URL";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";
import PopUp from "../../components/PopUp/PopUp";
import CardProduto from "../../components/CardProduto/CardProduto";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/header";
import {
  ImgRestaurant,
  TextRest,
  DetalhesRest,
  InfoRest,
  CategoriaCard,
  MainContainer,
  ProdutosContainer
} from "./styled";


const RestaurantPage = () => {
  useProtectedPage();
  const {
    removerProduto,
  } = useContext(GlobalContext);
  const params = useParams();
  const restaurante = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`);
  const [aberto, setAberto] = useState(false);
  const [produto, setProduto] = useState(false);
  const [quantidade, setQuantidade] = useState("");

  const abrirPopUp = () => {
    setAberto(true);
  };

  const fecharPopUp = () => {
    setAberto(false);
  };

  const categorias = restaurante.restaurant && restaurante.restaurant.products && restaurante.restaurant.products.map((produto) => {
      return produto.category;
  });

  const listaCategorias = categorias && categorias.filter((item, index) => {
      return categorias.indexOf(item) === index;
  });

  const produtoPorCategoria = (categoria, array) => {
    const filtro = array.filter((item) => item.category === categoria);

    const listaProdutos = filtro.map((produto) => {
      return (
        <CardProduto
          key={produto.id}
          imagem={produto.photoUrl}
          nome={produto.name}
          descricao={produto.description}
          preco={produto.price}
          id={produto.id}
          selecionarPedido={() => {
            setProduto({
              id: produto.id,
              imagem: produto.photoUrl,
              nome: produto.name,
              descricao: produto.description,
              preco: produto.price,
            });
            abrirPopUp();
          }}
          removerProduto={removerProduto}
        />
      );
    });

    return (
      <div>
        <CategoriaCard>{categoria}</CategoriaCard>
        {listaProdutos}
      </div>
    );
  };

  const filtroCategorias = listaCategorias && listaCategorias.map((categoria) => {
      return produtoPorCategoria(categoria, restaurante.restaurant.products);
  });

  return (
    <div>
    <Header title={"Restaurante"} />
        {restaurante.restaurant && (
        <MainContainer>
          <PopUp
            aberto={aberto}
            setAberto={setAberto}
            abrirPopUp={abrirPopUp}
            fecharPopUp={fecharPopUp}
            quantidade={quantidade}
            setQuantidade={setQuantidade}
            produto={produto}
            idRestaurante={params.id}
            restaurante={restaurante.restaurant}
          />
          <div>
            <DetalhesRest>
            <ImgRestaurant>
            <img
                src={restaurante.restaurant.logoUrl}
                alt={restaurante.restaurant.name}
              />
            </ImgRestaurant>
              
              <TextRest>{restaurante.restaurant.name}</TextRest>
              <p>{restaurante.restaurant.category}</p>
              <InfoRest>
                <p>{restaurante.restaurant.deliveryTime} min</p>
                <p>Frete R$ {restaurante.restaurant.shipping.toFixed(2).replace(".", ",")}</p>
              </InfoRest>
              <p>{restaurante.restaurant.address}</p>
            </DetalhesRest>
          </div>
          <ProdutosContainer>{filtroCategorias}</ProdutosContainer>
        </MainContainer>
      )}
    </div>
  );
};

export default RestaurantPage;
