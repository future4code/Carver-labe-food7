import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: auto;
  padding-bottom: 8vh;
`;

export const EnderecoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #eeeeee;
  height: 4.75rem;
  div {
    width: 344px;
    margin: 0 auto;
  }
  p {
    letter-spacing: -0.39px;
    margin: 0 0 0 1rem;
    font-weight: 500;
    :nth-child(1) {
      margin-bottom: 0.5rem;
      color: #b8b8b8;
    }
  }
`;

export const OpcaoPgto = styled.div`
  flex-direction: column;
  width: 90vw;
  margin: 0 auto 1rem;
  display: flex;

  p {
    border-bottom: 1px solid #000;
    padding-bottom: 0.5rem;
  }

  input {
    margin-bottom: 1rem;
  }
`;

export const NomeRestaurante = styled.p`
  color: #e86e5a;
`

export const ProdutoContainer = styled.div`
  margin-left: 0.5rem;
`;

export const PrecoContainer = styled.div`
  margin: 0 1rem 1rem;
  width: 90vw;
`;

export const Frete = styled.div`
  display: flex;
  justify-content: flex-end;

  p:first-child {
    margin-right: 0.2rem;
  }
`;

export const Preco = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    :nth-child(2) {
      font-weight: bold;
      color: #e86e5a;
    }
  }
`;

export const CarrinhoVazio = styled.p`
  padding: 2rem 4rem 4rem 2rem;
  font-size: 18px;
  margin-left: 6rem;
`;
