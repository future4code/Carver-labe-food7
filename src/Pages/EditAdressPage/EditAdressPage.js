import Menu from "../../Components/Menu/Menu";
import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import { goToProfile } from '../../Routes/Coordinator';
import EditAddressForm from './EditAdressForm';
import { useHistory } from "react-router-dom";

const EditAdressPage = () => {
    useProtectedPage();
    const history = useHistory()
    
    return (
        <div>
            <button onClick={()=>goToProfile(history)}>Voltar</button>
            <h1>Edit Adress</h1>
            <EditAddressForm/>
            <Menu/>
        </div>
    )
}

export default EditAdressPage