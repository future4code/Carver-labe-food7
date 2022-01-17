
import React, { useEffect } from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import { goToEditAdress, goToEditProfile } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { EditProfile } from '../../services/Access'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/header'
import { Profile, CardHistorico, CardHistoricoContainer} from './styled'
import { Button } from '@mui/material'

const ProfilePage = () => {
    useProtectedPage();
    const history = useHistory()
    const perfil = useRequestData([], `${BASE_URL}/profile`)
    const pedidos = useRequestData([], `${BASE_URL}/orders/history`)
    console.log(pedidos)

    const listarPedidos = pedidos && pedidos.orders && pedidos.orders.map((pedido) => {
    let converterData = new Date(pedido.createdAt);
    const formatarData = converterData.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
      return (<CardHistorico>
        <p>{pedido.restaurantName}</p>
        <p>{formatarData}</p>
        <p>SUBTOTAL R${pedido.totalPrice.toFixed(2).replace(".", ',')}</p>
      </CardHistorico>)
  })

  return (
    <Profile>
      <main>
        <Header title={"Meu Perfil"} />
        {perfil.user ? (
          <div>
            <div id={"personalData"}>
              <div>
                <p id={"nome"}>{perfil.user.name}</p>
                <p id={"email"}>{perfil.user.email}</p>
                <p id={"cpf"}>{perfil.user.cpf}</p>
                <Button onClick={() => goToEditProfile(history)}>
                  Editar
                  <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg" />
                </Button>

                <p>Endereço cadastrado </p>
                <p id={"endereco"}>{perfil.user.address}</p>
                <Button onClick={() => goToEditAdress(history)}>
                  Edidar
                  <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading..</div>
        )}
        
        
        <h3> Histórico de pedidos</h3>
        <hr></hr>
        <CardHistoricoContainer>
        {pedidos.orders ? (
          

          <div>
             {listarPedidos}
          </div>
          
        ) : (
          
          <div>Você ainda não realizou nenhum pedido!</div>
        )}
        </CardHistoricoContainer>
        
       
        <Menu />
      </main>
    </Profile>
  );
};

export default ProfilePage;