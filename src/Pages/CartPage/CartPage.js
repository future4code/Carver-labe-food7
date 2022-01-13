import React, { useContext, useState } from 'react'
import Menu from '../../Components/Menu/Menu';
import { BASE_URL } from "../../Constants/URL";
import GlobalContext from '../../Global/GlobalContext';
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import useRequestData from "../../Hooks/useRequestData";

const CartPage = () => {
    useProtectedPage()
    const { carrinho, pedido, setCarrinho, setPedido, } = useContext(GlobalContext);
    const [precoTotal, setPrecoTotal] = useState(0);
    const pedidoAtivo = useRequestData({}, `${BASE_URL}/active-order`) 

    return (
        <div>
            <h1>Cart</h1>
            <Menu />
        </div>
    )
}

export default CartPage