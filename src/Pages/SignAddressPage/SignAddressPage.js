import React from 'react'
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import SignAddressForm from './SignAddressForm'


const SignAddressPage = () => {
    useProtectedPage()

    return (
        <div>
            <h4>Meu Endereço </h4>
            <SignAddressForm/>
        </div>
    ) 
}

export default SignAddressPage