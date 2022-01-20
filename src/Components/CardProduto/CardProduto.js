import React, { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import {
  ProdutoCard,
  ButtonAdicionar,
  Imagem,
  DescricaoProduto,
  ButtonRemover,
  InfoCard,
  NomeProduto,
  QuantidadeContainer
} from "./styled";

const CardProduto = ({
  id,
  imagem,
  nome,
  descricao,
  preco,
  selecionarPedido,
  removerProduto,
}) => {
  const { carrinho, restaurantePedido, setRestaurantePedido } =
    useContext(GlobalContext);

  const exibirProduto = carrinho?.products.filter(
    (produto) => produto.id === id
  );
  return (
    <ProdutoCard>
      <Imagem src={imagem} />
      <InfoCard>
        <NomeProduto>{nome}</NomeProduto>
        <DescricaoProduto>{descricao}</DescricaoProduto>
        <p>R$ {preco.toFixed(2).replace(".", ",")}</p>
      </InfoCard>
      {exibirProduto.length === 0 ? (
        <ButtonAdicionar onClick={selecionarPedido}>adicionar</ButtonAdicionar>
      ) : (
        <ButtonRemover
          onClick={() => {
            removerProduto(id);
            if (carrinho.products.length === 1) {
              setRestaurantePedido({
                id: "",
                address: "",
                deliveryTime: "",
                shipping: "",
              });
            }
          }}
        >
          remover
        </ButtonRemover>
      )}
      {exibirProduto.length > 0 && <QuantidadeContainer>{exibirProduto[0].quantity}</QuantidadeContainer>}
    </ProdutoCard>
  );
};

export default CardProduto;
