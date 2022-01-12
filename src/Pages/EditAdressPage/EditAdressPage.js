import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage';

const EditAdressPage = () => {
    useProtectedPage();
    return (
        <div>
            <h1>Edit Adress</h1>
        </div>
    )
}

export default EditAdressPage