import React from "react";
import { useHistory } from "react-router-dom";
import { Headers, Text } from "./styled";


const Header = ({title}) => {
    const history = useHistory();
    return (
      <Headers>
           <Text>{title}</Text>
      </Headers>
    );
  };
  
  export default Header;