import { createGlobalStyle } from "styled-components";
import "../assets/fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  body{
    width: 375px;
    height: 667px;
    margin: 0 auto;
    position: relative;
    font-family: 'Roboto', sans-serif;  
  }
`;

export default GlobalStyle;
