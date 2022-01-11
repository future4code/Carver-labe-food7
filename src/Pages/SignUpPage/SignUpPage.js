import React from 'react'
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage"
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
    useUnprotectedPage()
    
    return (
        <div>
            <h1>Rappi4</h1>
            <h4> Cadastrar </h4>
            <SignUpForm/>
        </div>
    ) 
}

export default SignUpPage