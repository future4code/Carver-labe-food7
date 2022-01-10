import React, {useState} from "react";
import { SignUp } from '../../Services/Access'
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useForm from '../../Hooks/useForm'



const SignUpForm = ({setRightButtonText}) => {
    const {form, handleInputOnChange, clear} = useForm({name:"", email:"", cpf:"", password:""})
    const history = useHistory()
    const [isLoading, setIsLoading] = useState("")

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
            <div>
                <form onSubmit={onSubmitForm}>
                    <input
                        name={"name"}
                        value={form.username}
                        onChange={handleInputOnChange}
                        label={"Nome"}
                        type={"name"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <input
                        name={"email"}
                        value={form.email}
                        onChange={handleInputOnChange}
                        label={"E-mail"}
                        type={"email"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <input
                        name={"cpf"}
                        value={form.cpf}
                        onChange={handleInputOnChange}
                        label={"E-mail"}
                        type={"email"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <input
                        name={"password"}
                        value={form.password}
                        onChange={handleInputOnChange}
                        label={"Senha"}
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <button 
                    fullWidth 
                    variant="contained"
                    type="submit"
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <p>CADASTRAR</p>}
                    </button>
                </form>
            </div>
    )
}

export default SignUpForm; 