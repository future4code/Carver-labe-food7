import React from "react";
import { SignUp } from '../../Services/Access'
import { useHistory } from "react-router-dom";
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUpForm = () => {
    const {form, handleInputOnChange, clear} = useForm({name:"", email:"", cpf:"", password:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp(form, clear, history)
    }

    return (
            <div>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"name"}
                        value={form.username}
                        onChange={handleInputOnChange}
                        label={"Nome e Sobrenome"}
                        type={"name"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
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
                    <TextField
                        name={"cpf"}
                        value={form.cpf}
                        onChange={handleInputOnChange}
                        label={"CPF: 000.000.000-00"}
                        type={"cpf"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
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
                    <Button 
                    fullWidth 
                    variant="contained"
                    type="submit"
                    >
                    <p>Criar</p>
                    </Button>
                </form>
            </div>
    )
}

export default SignUpForm; 