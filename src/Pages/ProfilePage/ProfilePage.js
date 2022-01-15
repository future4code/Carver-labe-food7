
import React, { useEffect } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/URL'
import { goToEditAdress, goToEditProfile } from '../../Routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { EditProfile } from '../../Services/Access'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import Header from '../../Components/Header/header'
import Menu from '../../Components/Menu/Menu'
import { Profile, Imagem } from './styled'
import { Button } from '@mui/material'


const ProfilePage = () => {
    useProtectedPage();
    const history = useHistory()
    const perfil = useRequestData([], `${BASE_URL}/profile`)
    const pedidos = useRequestData([], `${BASE_URL}/orders/history`)
    console.log(pedidos)

    return (
        <Profile>
            <main>            
            <Header title={"Meu Perfil"}/>
        {perfil.user ? <div>
            <div id={"personalData"}>
                <div>
                    <p id={"nome"}>{perfil.user.name}</p>
                    <p id={"email"}>{perfil.user.email}</p>
                    <p id={"cpf"}>{perfil.user.cpf}</p>
                    <Button onClick={()=>goToEditProfile(history)}>Editar<img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg"/></Button>
                
                    <p>Endereço cadastrado </p>
                    <p id={"endereco"}>{perfil.user.address}</p>
                    <Button onClick={()=>goToEditAdress(history)}>Edidar<img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg"/></Button>

                </div>
            </div>
        </div> : <div>Loading..</div>}  
        <h3> Histórico de pedidos</h3>
        <hr></hr>
        {pedidos.length === 0 ? <div> ({pedidos})</div> : <div>Você ainda não realizou nenhum pedido!</div>}
        <Menu />
        </main>

        </Profile>
    )
}



export default ProfilePage