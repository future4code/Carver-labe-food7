import React, { useContext } from 'react';
import GlobalContext from '../../Global/GlobalContext';

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
    <div>
      <img img={imagem} />
      <div>
        <p>{nome}</p>
        <p>{descricao}</p>
        <p>R$ {preco.toFixed(2).replace('.', ',')}</p>
      </div>
      {findId.length == 0 ? (
        <button onClick={selecionarPedido}>adicionar</button>
      ) : (
        <button
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
        </button>
      )}
      {findId.length > 0 && <span>{findId[0].quantity}</span>}
    </div>
  );
};

export default CardProduto;