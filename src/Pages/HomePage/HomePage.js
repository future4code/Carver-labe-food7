import React from 'react'
import CardRestaurante from '../../Components/CardRestaurante'
import { BASE_URL } from '../../Constants/URL'
import useRequestData from '../../Hooks/useRequestData'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

const HomePage = () => {
    useProtectedPage()

    const restaurantes = useRequestData([], `${BASE_URL}/restaurants`)
    console.log("restaurantes", restaurantes)

    const filterRestaurants = () => {
        if(restaurants.category === restaurante.category){
            return renderRestaurantes
        }
    }

    const botaoNavegacao = restaurantes.restaurants && restaurantes.restaurants.map((restaurante)=>{
        return <div key={restaurante.id}>
            <button /* onClick={} */>{restaurante.category}</button>
        </div>
    })
    
    const renderRestaurantes = restaurantes.restaurants && restaurantes.restaurants.map((restaurante)=>{
        return <div key={restaurante.id}>
            <CardRestaurante
            src={restaurante.logoUrl}
            name={restaurante.name}
            deliveryTime={restaurante.deliveryTime}
            shipping={restaurante.shipping}
            />
        </div>
    })

    return (
        <div>
            <h1>HOME</h1>
            {botaoNavegacao}
            {renderRestaurantes}
        </div>
    )
}

export default HomePage 