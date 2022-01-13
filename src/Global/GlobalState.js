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

    return ( 
        < GlobalContext.Provider 
            value = {{
                    carrinho,
                    setCarrinho,
                    pedido,
                    setPedido,
                    restauranteAtual,
                    setRestauranteAtual
                }} 
        > 
        {props.children} 
        </GlobalContext.Provider>
    );
};

export default GlobalState;