import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 360px;
  height: 640px;
  margin-left: 0.5rem;
`;

export const FiltroHomeContainer = styled.div`
  width: auto;
  max-width: 346px;
  overflow: overlay;
  ::-webkit-scrollbar {
    width: 0px;
  }
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 20px;
  padding: 20px 0px;
  margin: 0.5rem 0 0.5rem 0.8rem;
  box-sizing: inherit;
`;

export const TextFiltroHome = styled.strong`
  width: 87px;
  height: 18px;
  margin-right: 2rem;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;

export const InputContainer = styled.div`
  width: 93%;
  margin-left: 0.7rem;
`;

export const RestaurantesContainer = styled.div`
  padding-bottom: 9vh;
`