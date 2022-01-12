import React, { useState } from 'react'
import CardRestaurante from '../../Components/CardRestaurante'
import { BASE_URL } from '../../Constants/URL'
import useRequestData from '../../Hooks/useRequestData'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';

const HomePage = () => {
    useProtectedPage();

    const restaurantes = useRequestData([], `${BASE_URL}/restaurants`)
    
    const {form, handleInputOnChange} = useForm({filtroRestaurante:"" })
    const [filtroTipo, setFiltroTipo] = useState("")

    const handleTipe=(value)=>{
        setFiltroTipo(value)
    }

    const renderRestaurantes = restaurantes.restaurants && restaurantes.restaurants
    .filter((restaurante) => {
        return (
          restaurante.name.toLowerCase().includes(form.filtroRestaurante.toLowerCase()) && 
          restaurante.category.includes(filtroTipo)
       
        );
      })
      .map((restaurante)=>{
        return <div key={restaurante.id}>
            <CardRestaurante
            id={restaurante.id}
            src={restaurante.logoUrl}
            name={restaurante.name}
            deliveryTime={restaurante.deliveryTime}
            shipping={restaurante.shipping}
            />
        </div>
    })

    return (
        <div>
            <h1>RESTAURANTES</h1>
            <label>
            <TextField
                        name={"filtroRestaurante"}
                        value={form.filtroRestaurante}
                        onChange={handleInputOnChange}
                        label={"Restaurante"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
            </label>
            <p>
            <strong onClick={()=>handleTipe("Hamburguer")}>Hamburguer   </strong>
            <strong onClick={()=>handleTipe("Asiática")} >Asiática   </strong>
            <strong onClick={()=>handleTipe("Massas")} >Massas   </strong>
            <strong onClick={()=>handleTipe("Saudável")} >Saudável</strong>
            <strong onClick={()=>handleTipe("Italiana")} >Italiana</strong>
            <strong onClick={()=>handleTipe("Sorvetes")} >Sorvetes</strong>
            <strong onClick={()=>handleTipe("Carnes")} >Carnes</strong>
            <strong onClick={()=>handleTipe("Baiana")} >Baiana</strong>
            <strong onClick={()=>handleTipe("Petiscos")} >Petiscos</strong>
            <strong onClick={()=>handleTipe("Mexicana")} >Mexicana</strong>
            </p>
            {renderRestaurantes}
        </div>
    )
}

export default HomePage 