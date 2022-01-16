import React from 'react'
import { goToHome } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { BASE_URL } from '../../constants/URL'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/header'
import { Button } from '@mui/material';

const SearchPage = () => {
    useProtectedPage()
    const history = useHistory()

    const { form, handleInputOnChange } = useForm({ filtroRestaurante: "" });
    const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);

    const buscaVazia = () => {
        if(form.filtroRestaurante.length === 0){
            return <div>Busque por nome de restaurante</div>
        } else {
            return renderRestaurantes.length > 0 ? <div>{renderRestaurantes}</div> : <div>Não encontramos nenhum restaurante!</div>
        }
    }

    console.log("formFiltro",form.filtroRestaurante)
    
    const renderRestaurantes = restaurantes.restaurants && restaurantes.restaurants
      .filter((restaurante) => {
        return (
          restaurante.name
            .toLowerCase()
            .includes(form.filtroRestaurante.toLowerCase()) 
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
        <div>
            <Button onClick={()=>goToHome(history)}><img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/4FC8F2F3-EE15-457A-B114-9A92B2A97C8A.svg"/></Button>
            <Header title={"Busca"}/>
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
            {buscaVazia()}
            
        </div>
    )
}

export default SearchPage