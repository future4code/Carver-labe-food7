import styled from "styled-components";

export const ProdutoCard = styled.div`
 display: flex;
  height: 7rem;
  margin: 1.25rem 0;
  border: solid 1px #b8b8b8;
  border-radius: 0.5rem;
  width: 354px;
  position: relative;
  p {
    margin: 0 0 6px 0;
  }
`

export const Imagem = styled.img`
  width: 6.8rem;
  height: 7rem;
  margin-right: 1rem;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem 0 0 0.5rem; ;
`

export const ButtonAdicionar = styled.button`
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-color: transparent;
  border: 1px solid #000000;
  color: #000000;
  height: 2rem;
  width: 5.6rem;
  border-radius: 0.5rem 0 0.5rem 0; ;
`

export const ButtonRemover = styled.button`
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-color: transparent;
  color: #e02020;
  border: 1px solid #e02020;
  height: 2rem;
  width: 5.6rem;
  border-radius: 0.5rem 0 0.5rem 0;
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 10rem;
`

export const NomeProduto = styled.p`
color: #e86e5a;
width: 14rem;
`

export const QuantidadeContainer = styled.span`
position: absolute;
  right: -1px;
  top: -1px;
  background-color: transparent;
  color: #e02020;
  border: 1px solid #e02020;
  height: 1.5rem;
  width: 2rem;
  border-radius: 0 0.5rem 0 0.5rem;
  text-align: center;
  padding-top: 0.5rem;
`

export const DescricaoProduto = styled.p`
  color: #b8b8b8;
  font-size: 14px; 
  width: 14rem;
`