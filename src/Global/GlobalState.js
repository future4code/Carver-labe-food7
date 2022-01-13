import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    const [carrinho, setCarrinho] = useState([]);
    const [restauranteAtual, setRestauranteAtual] = useState({
        id: '',
        address: '',
        deliveryTime: '',
        shipping: '',
        name: ''
    })
    const [pedido, setPedido] = useState({
        products: [],
        paymentMethod: ""
    })

    const adicionarPedido = (id, quantidade) => {
        const novoPedido = pedido;
        novoPedido.products.push({
            id: id,
            quantity: quantidade
        })
        setPedido(novoPedido)
    }
    
    const removerPedido = (id) => {
        const pedidoCarrinho = pedido;
        const encontrarPedido = pedidoCarrinho.products?.filter((produto) => produto.id !== id);
        setPedido({ products: encontrarPedido })
        const noCarrinho = carrinho;
        const filtrarCarrinho = noCarrinho.filter((produto) => produto.id !== id)
        setCarrinho(filtrarCarrinho)
    }

    return ( 
        < GlobalContext.Provider 
            value = {{
                    carrinho,
                    setCarrinho,
                    pedido,
                    setPedido,
                    restauranteAtual,
                    setRestauranteAtual,
                    adicionarPedido,
                    removerPedido
                }} 
        > 
        {props.children} 
        </GlobalContext.Provider>
    );
};

export default GlobalState;