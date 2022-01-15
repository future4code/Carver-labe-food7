import React from 'react'
import EditProfileForm from './EditProfileForm'
import { goToProfile } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const EditProfilePage = () => {
    useProtectedPage();
    const history = useHistory()
    
    return (
        <div>
            <h1>Editar</h1>
            <button onClick={()=>goToProfile(history)}>Voltar</button>
            <EditProfileForm/>
        </div>
    )
}

export default EditProfilePage