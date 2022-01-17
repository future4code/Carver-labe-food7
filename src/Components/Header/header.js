import React from "react";
import { useHistory } from "react-router-dom";
import { Headers, Text } from "./styled";
import { Button } from "@mui/material";
import Voltar from "../../assets/icones/back.svg";

const Header = ({ title }) => {
  const history = useHistory();
  return (
    <Headers>
      <Button onClick={history.goBack} title="Voltar">
        <img src={Voltar} alt="Voltar" />
      </Button>
      <Text>{title}</Text>
    </Headers>
  );
};

export default Header;
