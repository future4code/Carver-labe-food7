import React from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useHistory } from "react-router-dom";
import { goToHome, goToCart, goToProfile } from "../../routes/Coordinator";
import { MenuHome } from "./styled";
import { Button } from "@mui/material";
import Home from '../../assets/icones/homepage.svg'
import HomeColorido from '../../assets/icones/homepage-color.svg'
import Carrinho from '../../assets/icones/shopping-cart.svg'
import CarrinhoColorido from '../../assets/icones/shopping-cart-color.svg'
import Avatar from '../../assets/icones/avatar.svg'
import AvatarColorido from '../../assets/icones/avatar-color.svg'


const Menu = () => {
  useProtectedPage();
  const history = useHistory();

  if(window.location.pathname === "/") {
    return (
      <MenuHome>
        <Button><img src={HomeColorido} alt="ícone home"/></Button>
        <Button onClick={() => goToCart(history)}><img src={Carrinho} alt="ícone carrinho" /></Button>
        <Button onClick={() => goToProfile(history)}><img src={Avatar} alt="ícone avatar" /></Button>
      </MenuHome>
    )
  } else if (window.location.pathname === "/carrinho") {
    return (
      <MenuHome>
        <Button onClick={() => goToHome(history)}><img src={Home} alt="ícone home"/></Button>
        <Button><img src={CarrinhoColorido} alt="ícone carrinho" /></Button>
        <Button onClick={() => goToProfile(history)}><img src={Avatar} alt="ícone avatar" /></Button>
      </MenuHome>
    )
  } else if (window.location.pathname === "/perfil") {
    return (
      <MenuHome>
        <Button onClick={() => goToHome(history)}><img src={Home} alt="ícone home"/></Button>
        <Button onClick={() => goToCart(history)}><img src={Carrinho} alt="ícone carrinho" /></Button>
        <Button><img src={AvatarColorido} alt="ícone avatar" /></Button>
      </MenuHome>
    )
  } 
};

export default Menu;

