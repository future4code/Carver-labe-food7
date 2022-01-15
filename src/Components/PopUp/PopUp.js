import React, { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { BodyModal, SModal } from "./styled";

const PopUP = ({
  aberto,
  fecharPopUp,
  quantidade,
  setQuantidade,
  produto,
  idRestaurante,
  restaurante,
}) => {
  const handleChange = (event) => {
    setQuantidade(event.target.value);
  };

  const {
    restaurantePedido,
    setRestaurantePedido,
    pedido,
    setPedido,
    adicionarProduto,
  } = useContext(GlobalContext);

  const definirPedido = () => {
    if (restaurantePedido.id === "" || restaurantePedido.id === idRestaurante) {
      if (quantidade > 0) {
        adicionarProduto(produto.id, quantidade);
        fecharPopUp();
        setRestaurantePedido({
          id: idRestaurante,
          name: restaurante.name,
          deliveryTime: restaurante.deliveryTime,
          shipping: restaurante.shipping,
          address: restaurante.address,
        });
        const novoPedido = pedido;
        novoPedido.push(produto);
        setPedido(novoPedido);
        setQuantidade("");
      }
    }
  };

  const exibirPopUp = (
    <BodyModal>
      <p>Selecione a quantidade desejada!</p>
      <FormControl fullWidth variant="outlined" color={"secondary"}>
        <InputLabel> Quantidade Desejada </InputLabel>
        <Select value={quantidade} onChange={handleChange} label="Quantidade desejada">
          <MenuItem value="" disabled style={{ display: "none" }}>{" "}</MenuItem>
          <MenuItem value={1}> 1 </MenuItem>
          <MenuItem value={2}> 2 </MenuItem>
          <MenuItem value={3}> 3 </MenuItem>
          <MenuItem value={4}> 4 </MenuItem>
        </Select>
      </FormControl>
      <Button color={"primary"} onClick={definirPedido}>
        Adicionar ao carrinho
      </Button>
    </BodyModal>
  );

  return (
    <div>
      <SModal open={aberto} onClose={fecharPopUp}>
        {exibirPopUp}
      </SModal>
    </div>
  );
};

export default PopUP;
