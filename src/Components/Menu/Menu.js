import React from "react";
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import { useHistory } from "react-router-dom";
import { goToHome, goToCart, goToProfile } from "../../Routes/Coordinator";

const Menu = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <div>
      <button onClick={() => goToHome(history)}>Home</button>
      <button onClick={() => goToCart(history)}>Cart</button>
      <button onClick={() => goToProfile(history)}>Profile</button>
    </div>
  );
};

export default Menu;