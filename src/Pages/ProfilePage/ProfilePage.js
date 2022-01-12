import React from 'react'
import useRequestData from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/URL'
import { goToEditAdress, goToEditProfile } from '../../Routes/Coordinator'

const ProfilePage = () => {
    const perfil = useRequestData([], `${BASE_URL}/profile`)
    console.log(perfil)

    return (
        <div>
            <h1>Meu Perfil</h1>
        {perfil.user ? <div>
            <div id={"personalData"}>
                <div>
                    <p id={"nome"}>{perfil.user.name}</p>
                    <p id={"email"}>{perfil.user.email}</p>
                    <p id={"cpf"}>{perfil.user.cpf}</p>
                    <button onClick={goToEditProfile}>Editar Perfil</button>
                    <p>Endereço cadastrado </p>
                    <p id={"endereco"}>{perfil.user.address}</p>
                    <button onClick={goToEditAdress}>Editar Perfil</button>
                </div>
            </div>
        </div> : <div>Loading..</div>}
        </div>
    )
}



export default ProfilePage