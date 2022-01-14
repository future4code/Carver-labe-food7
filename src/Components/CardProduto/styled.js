import styled from "styled-components";




export const ProdutoCard = styled.div`

 display: flex;
  height: 7rem;
  margin: 1.25rem 0;
  border: solid 1px #f3c9c2;
  border-radius: 0.5rem;
  width: 100%;
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
  background-color: #fff;
  border: 1px solid #8E8E93;
  color: #e02020;
  height: 2rem;
  width: 5.6rem;
  border-radius: 0.5rem 0 0.5rem 0; ;
`
export const ButtonRemover = styled.button`
  
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-color: #e86e5a;
  color: #fff;
  border: 1px solid #e86e5a;
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

color: #E86E5A

`

export const DescricaoProduto = styled.p`

  color: #8E8E93;
  font-size: 14px; 

`