import React, { useContext, useState } from "react";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Routes/Coordinator";
import GlobalContext from '../../Global/GlobalContext';
import AparecePopUp from "../../Components/PopUp";
import CardProduto from "../../Components/CardProduto/CardProduto";
import Menu from "../../Components/Menu/Menu";
import { SettingsPowerSharp } from "@mui/icons-material";

const RestaurantPage = () => {
  useProtectedPage();
  const { carrinho, setCarrinho, pedido, setPedido, adicionarPedido, removerPedido } = useContext(GlobalContext)
  const params = useParams();
  const restaurante = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`);
  const history = useHistory();
  const [abrir, setAbrir] = useState(false)
  const [produto, setProduto] = useState(false)

  const abrirPopUp = () => {
    setAbrir(true)
  }

  const fecharPopUp = () => {
    setAbrir(false)
  }

  const [quantidade, setQuantidade] = useState("")

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

  const abrirSelect = () => {

  }

  const produtoPorCategoria = (categoria, array) => {
    const filtro = array.filter((item) => item.category === categoria);

    const listaProdutos = filtro.map((produto) => {
      const produtoId = pedido.products.filter((product) => product.id === produto.id);
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
                    removerPedido={removerPedido}
                  />
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
        <>
          <AparecePopUp 
              abrir={abrir}
              setAbrir={setAbrir}
              abrirPopUp={abrirPopUp}
              fecharPopUp={fecharPopUp}
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              produto={produto}
              idRestaurante={restaurante.restaurant.id}
              restaurante={restaurante.restaurant}
          />
        <div>
          <img src={restaurante.restaurant.logoUrl} alt={restaurante.restaurant.name}/>
          <p>{restaurante.restaurant.name}</p>
          <p>{restaurante.restaurant.category}</p>
          <p>{restaurante.restaurant.deliveryTime} min</p>
          <p>Frete R$ {restaurante.restaurant.shipping}</p>
          <p>{restaurante.restaurant.address}</p>
        </div>
       </> 
      )}

      {filtroCategorias}
      <Menu/> 
    </div>
  );
};

export default RestaurantPage;
