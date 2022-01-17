import styled from "styled-components";

export const Profile = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  letter-spacing: -0.39px;
  color: #000000;
  pading: 1rem 0.5rem;

`

export const CardHistoricoContainer = styled.section`
    justify-self: center;

    h4{
      text-align: center;
      font-weigth: normal;
    }
`

export const CardHistorico = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 5.12rem;
  margin: 1rem auto;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

     p:nth-child(1){
      width: 296px;
      height: 18px;
      margin: 0 0 9px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #e86e5a;
     }

     p:nth-child(2){
      width: 296px;
      height: 18px;
      margin: 9px 0 7px;
      font-family: Roboto;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.29px;
      color: #000;
     }

     p:nth-child(3){
      width: 296px;
      height: 18px;
      margin: 7px 0 0;
      font-family: Roboto;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #000;
     }
`
export const DadosContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`
export const DadosContainer2 = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eeeeee;
  padding: 0 1rem;

  p:first-child{
    color: #b8b8b8;
  }
`

export const HistoricoContainer = styled.div `
padding: 0 1rem;

h3 {
  border-bottom: 1px solid #000;
  padding-bottom: 0.5rem;
  width: 99.7%;
  font-weight: normal;
}
`