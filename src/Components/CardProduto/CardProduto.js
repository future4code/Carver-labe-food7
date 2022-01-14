import React, { useContext } from 'react';
import GlobalContext from '../../Global/GlobalContext';
import { ProdutoCard, ButtonAdicionar, Imagem, DescricaoProduto, ButtonRemover, InfoCard, NomeProduto } from './styled';

const CardProduto = ({
  id,
  imagem,
  nome,
  descricao,
  preco,
  selecionarPedido,
  removerPedido,
}) => {
  const { pedido, setRestauranteAtual, restauranteAtual } =
    useContext(GlobalContext);

  const findId = pedido?.products.filter((produto) => produto.id === id);

  return (
    <ProdutoCard>
      
      <Imagem src={imagem} />
      <InfoCard>
        <NomeProduto>{nome}</NomeProduto>
        <DescricaoProduto>{descricao}</DescricaoProduto>
        <p>R$ {preco}</p>
      </InfoCard>
      {findId.length == 0 ? (
        <ButtonAdicionar onClick={selecionarPedido}>adicionar</ButtonAdicionar>
      ) : (
        <ButtonRemover
          onClick={() => {
            removerPedido(id);
            if (pedido.products.length == 1) {
              setRestauranteAtual({
                id: '',
                address: '',
                deliveryTime: '',
                shipping: '',
              });
            }
          }}>
          Remover
        </ButtonRemover>
      )}
      {findId.length > 0 && <span>{findId[0].quantity}</span>}
      
    </ProdutoCard>
  );
};

export default CardProduto;