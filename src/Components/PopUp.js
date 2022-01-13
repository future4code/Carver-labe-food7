import FormControl from "@mui/material/FormControl";
import {InputLabel} from "@mui/material";
import React, {useContext} from "react";
import GlobalContext from "../Global/GlobalContext";
import { Button, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem"
import styled from 'styled-components';
import Modal from '@mui/material/Modal';

export const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 206px;
  max-width: 328px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #fff;
  border-radius: 10px;
`;

export const SModal = styled(Modal)`
display: flex;
align-items: center;
outline: none;
`

const AparecePopUP = ({ abrir, fecharPopUp, quantidade, setQuantidade, adicionarPedido, produto, idRestaurante, restaurante }) => {
    
    const handleChange = (event) => {
        setQuantidade(event.target.value)
    }   

    const {restauranteAtual, setRestauranteAtual, carrinho, setCarrinho} = useContext(GlobalContext)

    const definirPedido = () => {
        if (restauranteAtual.id === '' || restauranteAtual.id === idRestaurante) {
            if (quantidade > 0) {
                adicionarPedido(produto.id, quantidade)
                fecharPopUp()
                setRestauranteAtual({
                    id: idRestaurante,
                    deliveryTime: restaurante.deliveryTime,
                    shipping: restaurante.shipping,
                    address: restaurante.address,
                    name: restaurante.name
                })
                const novoCarrinho = carrinho
                novoCarrinho.push(produto)
                setCarrinho(novoCarrinho)
                setQuantidade('')
            }
        }
    }

    const popUp = ( 
        <BodyModal>
            <p> Selecione a quantidade desejada! </p> 
            <FormControl fullWidth variant = 'outlined' color = {'secondary'}>
                <InputLabel > Quantidade Desejada </InputLabel> 
                <Select value = {quantidade} onChange = {handleChange} label = 'Quantidade desejada'>
                    <MenuItem value = '' disabled style = {{display: 'none'}}> </MenuItem> 
                    <MenuItem value = {1}> 1 </MenuItem> 
                    <MenuItem value = {2}> 2 </MenuItem> 
                    <MenuItem value = {3}> 3 </MenuItem> 
                    <MenuItem value = {4}> 4 </MenuItem> 
                </Select> 
            </FormControl> 
            <Button color = {'primary'} onClick = {definirPedido}>
            Adicionar ao carrinho 
            </Button> 
        </BodyModal>
    )


    return ( 
        <div>
            <SModal open={abrir} onClose={fecharPopUp}> 
                {popUp} 
            </SModal>
        </div>
    );
}

export default AparecePopUP;