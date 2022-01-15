import React, { useState } from 'react'
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante'
import Menu from '../../components/Menu/Menu'
import { BASE_URL } from '../../constants/URL'
import { useRequestData } from '../../hooks/useRequestData'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import TextField from '@mui/material/TextField';
import {HomePageContainer, 
        TextMenu, 
        FiltroHomeContainer, 
        TextFiltroHome, 
        StyledToolbar} from './styled' 
import { goToSearch } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import Header from "../../components/Header/header";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory()

  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);


  const { form, handleInputOnChange } = useForm({ filtroRestaurante: "" });
  const [filtroTipo, setFiltroTipo] = useState("");

  const handleTipe = (value) => {

   if(value === filtroTipo){
     setFiltroTipo("")
   }else{
     setFiltroTipo(value)
   }
  };

  const renderRestaurantes = restaurantes.restaurants && restaurantes.restaurants
    .filter((restaurante) => {
      return (
        restaurante.name
        .toLowerCase()
        .includes(form.filtroRestaurante.toLowerCase()) &&
          restaurante.category.includes(filtroTipo)
      );
  })
  .map((restaurante) => {
  return (
    <div key={restaurante.id}>
      <CardRestaurante
        id={restaurante.id}
        src={restaurante.logoUrl}
        name={restaurante.name}
        deliveryTime={restaurante.deliveryTime}
        shipping={restaurante.shipping}
      />
    </div>
    );
  });

    return (
        <HomePageContainer>
            
            <Header title={'Rappi4'} />
           
            <label>         
            <TextField
              name={"filtroRestaurante"}
              value={form.filtroRestaurante}
              onChange={handleInputOnChange}
              onClick={()=>goToSearch(history)}
              label={"Restaurante"}
              type={"text"}
              variant={"outlined"}
              fullWidth
              margin={"dense"}
              required
            />
            </label>      
            
            <FiltroHomeContainer>
           
            <TextFiltroHome onClick={()=>handleTipe("Hamburguer")}>Hamburguer</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Asiática")} >Asiática</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Árabe")} >Árabe</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Saudável")} >Saudável</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Italiana")} >Italiana</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Sorvetes")} >Sorvetes</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Carnes")} >Carnes</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Baiana")} >Baiana</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Petiscos")} >Petiscos</TextFiltroHome>
            <TextFiltroHome onClick={()=>handleTipe("Mexicana")} >Mexicana</TextFiltroHome>
            
            </FiltroHomeContainer>
            
            {renderRestaurantes}
                
          
            <Menu />
        </HomePageContainer>
    )
}

export default HomePage;
