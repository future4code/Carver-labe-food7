import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/URL";
import GlobalContext from "../../contexts/GlobalContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { PlaceOrder} from "../../services/Access";
import CardProduto from "../../components/CardProduto/CardProduto";
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/Menu";
import { dividerClasses, Button } from "@mui/material";
import {CartContainer, MainContainer, EnderecoCart, OpcaoPgto, PrecoContainer, Preco} from './styled'

const CartPage = () => {
  useProtectedPage();
  const {
    carrinho,
    setCarrinho,
    pedido,
    setPedido,
    restaurantePedido,
    setRestaurantePedido,
    removerProduto,
  } = useContext(GlobalContext);
  const [precoTotal, setPrecoTotal] = useState(0);
  const pedidoAtivo = useRequestData({}, `${BASE_URL}/active-order`);
  const perfil = useRequestData([], `${BASE_URL}/profile`);
  const [data, setData] = useState('');

  const confirmarPedido = () => {
    if (
      carrinho.paymentMethod !== '' &&
      carrinho.products.length > 0 &&
      restaurantePedido.id !== ''
    ) {
      PlaceOrder(carrinho, restaurantePedido.id, setData)
      setPedido([])
      setRestaurantePedido({
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
  }, []);

  const valorTotal = () => {
    let precoTotal = 0;
    let item;
    for (const produto of pedido) {
      item = carrinho.products.find((item) => item.id === produto.id);
      if (item && Object.keys(item).length > 0) {
        precoTotal += produto.preco * item.quantity;
      }
    }
    setPrecoTotal(precoTotal);
  };

  return (
    <CartContainer>
      <Header title={"Meu Carrinho"} />
      {restaurantePedido && (
        <MainContainer>
          <section>
            {perfil.user && (
              <EnderecoCart>
                <p>Endereco de Entrega</p>
                <p>{perfil.user.address}</p>
              </EnderecoCart>
            )}
          </section>
          <section>
            <p>{restaurantePedido.name}</p>
            <p>{restaurantePedido.address}</p>
            <p>{restaurantePedido.deliveryTime}</p>
          </section>
          <section>
            {pedido.length > 0 ?
            (<div>
              {pedido.map((produto) => (
                <CardProduto
                  key={produto.id}
                  imagem={produto.imagem}
                  nome={produto.nome}
                  descricao={produto.descricao}
                  preco={produto.preco}
                  id={produto.id}
                  removerProduto={removerProduto}
                />
              ))}</div>) : (<div>
                <p>CARRINHO VAZIO</p>
              </div>)}
          </section>
          <PrecoContainer>
            <Preco>
              {" "}
              {restaurantePedido.id ? (
                <>
                  <p>Frete R${restaurantePedido.shipping},00</p>
                </>
              ) : (
                <>
                  <p>Frete R$0,00</p>
                </>
              )}
            </Preco>
            <Preco>
              {precoTotal && restaurantePedido.shipping ? (
                <>
                  <p>
                    SUBTOTAL R$
                    {(precoTotal + restaurantePedido.shipping)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </>
              ) : (
                <>
                  <p>SUBTOTAL R$0,00</p>
                </>
              )}
            </Preco>
          </PrecoContainer>
          <OpcaoPgto>
            <p>Forma de pagamento</p>
            <form onSubmit={(ev) => ev.preventDefault()}>
              <div>
                <input
                  type="radio"
                  id="dinheiro"
                  name="paymentmethod"
                  onChange={() =>
                    setCarrinho({ ...carrinho, paymentMethod: "money" })
                  }
                />
                <label htmlFor="dinheiro">Dinheiro</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cartao"
                  name="paymentmethod"
                  onChange={() =>
                    setCarrinho({ ...carrinho, paymentMethod: "creditcard" })
                  }
                />
                <label htmlFor="cartao">Cartão de crédito</label>
              </div>

              <Button
              onClick={() => confirmarPedido()}
                type={"button"}
                variant="contained"
                color="primary"
                fullWidth
              >
                Confirmar
              </Button>
            </form>
          </OpcaoPgto>
        </MainContainer>
      )}
      <Menu />
    </CartContainer>
  );
};

export default CartPage;