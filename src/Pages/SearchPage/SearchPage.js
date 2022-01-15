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
            <button onClick={()=>goToHome(history)}>Voltar</button>
            <h1>Busca</h1>
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
            <Menu />
        </div>
    )
}

export default SearchPage