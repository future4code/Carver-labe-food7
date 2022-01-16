import styled from "styled-components";



export const Profile = styled.div`
 
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0 auto;
  
   main {
    overflow: auto;
  }
 
`

export const CardHistoricoContainer = styled.section`
    justify-self: center;
    margin: 1rem 1rem 1rem 1rem;
    height: 4.75rem;


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







