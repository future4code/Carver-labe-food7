import React, { useContext, useState } from 'react';
import Menu from '../../Components/Menu/Menu';
import { BASE_URL } from "../../Constants/URL";
import GlobalContext from '../../Global/GlobalContext';
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import useRequestData from "../../Hooks/useRequestData";
import CardProduto from "../../Components/CardProduto/CardProduto";

const CartPage = () => {
    useProtectedPage()
    const { carrinho, pedido, setCarrinho, setPedido, restauranteAtual, setRestauranteAtual, removerPedido } = useContext(GlobalContext);
    const [precoTotal, setPrecoTotal] = useState(0);
    const pedidoAtivo = useRequestData({}, `${BASE_URL}/active-order`) 

    // onSubmit = () => {
    //     placeOrder()
    // }
    // form onSubmit={(ev) => ev.preventDefault()}

    const valorTotal = () => {
        let precoTotal = 0;
        let item
        for (const produto of carrinho) {
            item = pedido.products.find((item) => item.id === produto.id)
            if(item && Object.keys(item).length > 0) {
                precoTotal += produto.price * item.quantity
            }
        }
        setPrecoTotal(precoTotal)
    }
    return (
        <div>
            <div>
                {restauranteAtual.id && 
                <div>
                {carrinho.length > 0 && carrinho.map((produto) => (   
                    <div>        
                <CardProduto
                   key = {produto.id}
                   imagem = {produto.photoUrl}
                   nome = {produto.name}
                   descricao = {produto.description}
                   preco = {produto.price}
                   id = {produto.id}
                   removerPedido = {removerPedido}
                 />
                 <p>TOTAL: R$ {valorTotal}</p>
                 </div>     
                 ) )
                 
                 } 
                 
                 </div> }
            </div>
            <Menu />
        </div>
        
    )
}

export default CartPage