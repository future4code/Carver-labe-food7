import React, { useContext, useState, useEffect } from 'react';
import Menu from '../../Components/Menu/Menu';
import { BASE_URL } from "../../Constants/URL";
import GlobalContext from '../../Global/GlobalContext';
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import useRequestData from "../../Hooks/useRequestData";
import CardProduto from "../../Components/CardProduto/CardProduto";
import Header from '../../Components/Header/header';
import { dividerClasses } from '@mui/material';
import { Button } from "@mui/material";
import axios from 'axios';
import {CartContainer, MainContainer, EnderecoCart, OpcaoPgto, PrecoContainer, Preco} from './styled'

const CartPage = () => {
    useProtectedPage()
    const { carrinho, pedido, setCarrinho, setPedido, restauranteAtual, setRestauranteAtual, removerPedido, adicionarPedido } = useContext(GlobalContext);
    const [precoTotal, setPrecoTotal] = useState(0);
    const pedidoAtivo = useRequestData({}, `${BASE_URL}/active-order`) 
    const perfil = useRequestData([], `${BASE_URL}/profile`)

    const placeOrder = (id, quantidade, setData) => {
        axios.post(`${BASE_URL}/restaurants/${id}/order`, 
        { body: {
            id: restauranteAtual.id,
            quantity: quantidade    
        }
        },
        { headers: {
          auth: localStorage.getItem("token")
        }
        })
        .then((res) => {
          setData(res.data)
        }).catch((err) => {
          alert(err.response.data.message)
        })
    }

    // onSubmit = () => {
    //     placeOrder()
    // }
    // form onSubmit={(ev) => ev.preventDefault()}
    console.log("carrinho",carrinho)

    const confirmarPedido = () => {
        if (
          carrinho.paymentMethod !== '' &&
          carrinho.products.length > 0 &&
          restauranteAtual.id !== ''
        ) {
          placeOrder(restauranteAtual.id, carrinho)
          setCarrinho([])
          setRestauranteAtual({
            id: '',
            address: '',
            deliveryTime: '',
            shipping: '',
            name: '',
          })
          setCarrinho({
            products: [],
            paymentMethod: '',
          })
      }
    }
    
    useEffect(() => {
        valorTotal()
    }, [])

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
        <CartContainer>
            <Header title={"Meu Carrinho"}/>
            <MainContainer>
            <div>
            {perfil.user ? <div>
            <div id={"personalData"}>
                <EnderecoCart>
                    <p>Endereço de entrega </p>
                    <p id={"endereco"}>{perfil.user.address}</p>    
                </EnderecoCart>
            </div>
             </div> : <div>Loading..</div>}
            </div>

            <div>
                <div>

                <div>  
                {carrinho.length > 0 && carrinho.map((produto) => (   
                <div>        
                 <CardProduto key = {produto.id}
                   imagem = {produto.photoUrl}
                   nome = {produto.name}
                   descricao = {produto.description}
                   preco = {produto.price}
                   id = {produto.id}
                   removerPedido = {removerPedido}
                 />
                 <p>TOTAL: R$ {precoTotal}</p>
                 </div>     
                 ) )
                 } 
                </div>

                 <PrecoContainer>
                 <Preco>
                {precoTotal ? (
                    <div>
                      <span>SUBTOTAL</span>
                      <span>R${precoTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    ) : (
                    <>
                      <span>SUBTOTAL</span>
                      <span>R$00,00</span>
                    </>
                    )
                }
                </Preco>

                <Preco>
                {restauranteAtual.id ? (
                    <>
                      <span>FRETE</span>
                      <span>R${restauranteAtual.shipping},00</span>
                    </>
                  ) : (
                    <>
                      <span>FRETE</span>
                      <span>R$00,00</span>
                    </>
                )
                }
                </Preco>

                <Preco>
                {precoTotal && restauranteAtual.shipping ? (
                    <>
                      <span>TOTAL</span>
                      <span>
                        R$
                        {(precoTotal + restauranteAtual.shipping)
                          .toFixed(2)
                          .replace('.', ',')}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>TOTAL</span>
                      <span>R$00,00</span>
                    </>
                  )
                }    
                </Preco>
                </PrecoContainer>
               <OpcaoPgto> 
                <div>
                <span>Forma de pagamento</span>
                  <form onSubmit={(ev) => ev.preventDefault()}>
                    <div>
                      <input
                        type='radio'
                        id='dinheiro'
                        name='paymentmethod'
                        onChange={() =>
                          setCarrinho({ ...carrinho, paymentMethod: 'money' })
                        }
                      />
                      <label htmlFor='dinheiro'>Dinheiro</label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        id='cartao'
                        name='paymentmethod'
                        onChange={() =>
                            setCarrinho({ ...carrinho, paymentMethod: 'creditcard' })
                        }
                      />
                      <label htmlFor='cartao'>Cartão de crédito</label>
                    </div>
                    
                    <Button
                      onClick={() => confirmarPedido()}
                      type={'button'}
                      variant='contained'
                      color='primary'
                      fullWidth
                    >
                      Confirmar
                    </Button>
                  </form>    
                </div>
                </OpcaoPgto>

                 </div> 
            </div>
            </MainContainer>
            <Menu />
        </CartContainer>
        
    )
}

export default CartPage