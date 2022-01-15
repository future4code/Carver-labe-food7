import React from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useHistory } from "react-router-dom";
import { goToHome, goToCart, goToProfile } from "../../routes/Coordinator";
import { MenuHome } from "./styled";
import { Button } from "@mui/material";

const Menu = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <div>
      <MenuHome>
      <Button onClick={() => goToHome(history)}><img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/665B3253-0B10-4DA6-ADB0-B764A98E9A47.svg" /></Button> 
      <Button onClick={() => goToCart(history)}><img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/6E69D164-038D-459A-B0D8-E2052E60CBB9.svg" /></Button>       
      <Button onClick={() => goToProfile(history)}><img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/67E026C8-789C-4AEF-AD4F-08BCD42B0795.svg" /></Button>
      </MenuHome>
      </div>
  );
};

export default Menu;

