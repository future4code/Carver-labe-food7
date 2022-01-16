import styled from "styled-components";




export const CartContainer = styled.div`

  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100vh;
`

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: auto;
`

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

`

export const OpcaoPgto = styled.div`

 flex-direction: column;
  width: 328px;
  margin: 0 auto 1rem;
  display: flex;
`

export const PrecoContainer = styled.div`

margin-bottom: 2rem;

`


export const Preco = styled.div`

  width: 328px;
  margin: 0 auto .5rem;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0 2rem;
    :nth-child(2) {
      font-weight: bold;
      color: #E86E5A;
    }
  }

`


