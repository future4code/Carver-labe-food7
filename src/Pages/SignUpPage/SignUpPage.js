import React from 'react'
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import SignUpForm from './SignUpForm'
import {TextSingUp, LogoImage, SingUpContainer} from '../SignUpPage/styled'


const SignUpPage = () => {
    useUnprotectedPage()
    
    return (
        <div>
            <LogoImage src={"https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/2996043A-2111-4F86-AB91-37474F98621C.svg"} />
            <TextSingUp> Cadastrar </TextSingUp>
            <SignUpForm/>
        </div>
    ) 
}

export default SignUpPage