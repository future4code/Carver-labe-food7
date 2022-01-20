import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [pedido, setPedido] = useState([]);
  const [carrinho, setCarrinho] = useState({
    products: [],
    paymentMethod: "",
  });
  const [restaurantePedido, setRestaurantePedido] = useState({
    id: "",
    name: "",
    address: "",
    deliveryTime: "",
    shipping: "",
  });

  const adicionarProduto = (id, quantidade) => {
      const carrinhoSemProduto = carrinho;
      carrinhoSemProduto.products.push({
          id: id,
          quantity: quantidade
      })
      setCarrinho(carrinhoSemProduto)
  }

  const removerProduto = (id) => {
      const carrinhoSemProduto = carrinho;
      const retirarDoCarrinho = carrinhoSemProduto.products?.filter((produto) => produto.id !== id);
      setCarrinho({ products: retirarDoCarrinho });
      const produtoSemPedido = pedido;
      const retirarPedido = produtoSemPedido.filter((produto) => produto.id !== id);
      setPedido(retirarPedido)
  }

  return (
    <GlobalContext.Provider
      value={{
        pedido,
        setPedido,
        carrinho,
        setCarrinho,
        restaurantePedido,
        setRestaurantePedido,
        adicionarProduto,
        removerProduto
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
