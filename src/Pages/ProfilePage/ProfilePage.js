
import React, { useEffect } from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/URL'
import { goToEditAdress, goToEditProfile } from '../../Routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { EditProfile } from '../../Services/Access'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

import Menu from '../../Components/Menu/Menu'


const ProfilePage = () => {
    useProtectedPage();
    const history = useHistory()
    const perfil = useRequestData([], `${BASE_URL}/profile`)
    const pedidos = useRequestData([], `${BASE_URL}/orders/history`)
    console.log(pedidos)

    return (
        <div>
            <h1>Meu Perfil</h1>
        {perfil.user ? <div>
            <div id={"personalData"}>
                <div>
                    <p id={"nome"}>{perfil.user.name}</p>
                    <p id={"email"}>{perfil.user.email}</p>
                    <p id={"cpf"}>{perfil.user.cpf}</p>
                    <button onClick={()=>goToEditProfile(history)}>Editar Perfil</button>
                    <p>Endereço cadastrado </p>
                    <p id={"endereco"}>{perfil.user.address}</p>
                    <button onClick={()=>goToEditAdress(history)}>Editar Perfil</button>
                </div>
            </div>
        </div> : <div>Loading..</div>}  
        <h3> Histórico de pedidos</h3>
        <hr></hr>
        {pedidos.length === 0 ? <div> ({pedidos})</div> : <div>Você ainda não realizou nenhum pedido!</div>}
        <Menu />
        </div>
    )
}



export default ProfilePage