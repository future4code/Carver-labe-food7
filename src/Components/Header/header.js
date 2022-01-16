import React from "react";
import { useHistory } from "react-router-dom";
import { Headers, Text } from "./styled";
import { Button } from "@mui/material";


const Header = ({title}) => {
    const history = useHistory();
    return (
      <Headers>
          
        <Button onClick={history.goBack} title='Voltar'>
          <img
            src={
              "https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/4FC8F2F3-EE15-457A-B114-9A92B2A97C8A.svg"
            }
            alt='Voltar'
          />
        </Button>
    

           <Text>{title}</Text>
      </Headers>
    );
  };
  
  export default Header;