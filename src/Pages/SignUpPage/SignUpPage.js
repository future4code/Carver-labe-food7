import React from 'react'
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage"
import SignUpForm from './SignUpForm'

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    
    return (
        <div>
            <h1>SignUp</h1>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </div>
    )
}

export default SignUpPage