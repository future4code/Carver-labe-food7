import React, { useContext, useState } from "react";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Routes/Coordinator";
import GlobalContext from '../../Global/GlobalContext';
import PopUp from "../../Components/PopUp";
import Menu from "../../Components/Menu/Menu";
import GlobalState from "../../Global/GlobalState";
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
    setOpen(true)
  }

  const fecharPopUp = () => {
    setOpen(false)
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

  

  const produtoPorCategoria = (categoria, array) => {
    const filtro = array.filter((item) => item.category === categoria);

    const listaProdutos = filtro.map((produto) => {
      const produtoId = pedido.products.filter((product) => product.id === produto.id);
      return (
        <div>
          <img width="200" src={produto.photoUrl} alt={produto.name} />
          <p>{produto.name}</p>
          <p>{produto.description}</p>
          <p>R$ {produto.price}</p>
          {produtoId.length === 0 ? (<button onClick={()=>setButtonPopup(produto.id, true)}>Adicionar</button>) : (
            <button onClick={() => {removerPedido(produto.id)}}>Remover</button>
          )}
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
          <p>Frete R${restaurante.restaurant.shipping}</p>
          <p>{restaurante.restaurant.address}</p>
        </div>
       </> 
      )}

      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Selecione a quantidade desejada</h3>
          <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <button onClick={()=> {adicionarPedido(restaurante.restaurant.products.id)}}>Adicionar ao carrinho</button>
      </PopUp>

      {filtroCategorias}
      <Menu/> 
    </div>
  );
};

export default RestaurantPage;
