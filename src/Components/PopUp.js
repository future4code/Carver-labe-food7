import React, { useContext } from "react";
import styled from 'styled-components'
import GlobalContext from "../Global/GlobalContext";

const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba (0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
`

const PopupInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: blue;
`

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;

`

function PopUp(props) {
    const aparecePopUP = ({open, handleClose, quantity, setQuantity, addItemToCart, product, restaurantId, data}) => {
        const handleChange=(event)=>{
          setQuantity(event.target.value)
        }
    }

    const {restauranteAtual, setRestauranteAtual, carrinho, setCarrinho} = useContext(GlobalContext)

    const definirPedido = () => {
        if(restauranteAtual.id === '' || restauranteAtual.id === restauranteId){
            if(quantity > 0){
                adicionarPedido(product.id, quantity)
                handleClose()
                setRestauranteAtual({
                    id: restaurantId,
                    deliveryTime: data.deliveryTime,
                    shipping: data.shipping,
                    address: data.address,
                    name: data.name
                })
                const novoCarrinho = carrinho
                novoCarrinho.push(product)
                setCarrinho(novoCarrinho)
                setQuantity('')
            }
        }
    }

    const popUp = (
        <p></p>
    )


    return(props.trigger) ? (
        <Popup>
            <PopupInner>
                {/* <CloseButton onClick={()=>props.setTrigger(false)}>X</CloseButton> */}
                {props.children}
            </PopupInner>
        </Popup>
    ) : "";
}
export default PopUp