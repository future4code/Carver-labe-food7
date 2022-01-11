import React from 'react'

const CardRestaurante = (props) => {
   
    return (
        <div onClick={props.onClick}>
            <h1>Restaurantes</h1>
            <img src={props.src}/>
            <p>{props.name}</p>
            <p>{props.deliveryTime} min</p>
            <p>Frete R${props.shipping}</p>
        </div>
    )
}

export default CardRestaurante