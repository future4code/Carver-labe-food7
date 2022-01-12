import React from "react";
import { SignUp } from '../../Services/Access'
import { useHistory } from "react-router-dom";
import useForm from '../../Hooks/useForm'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ButtonContainer, SingUpContainer, TexfieldContainer } from "../SignUpPage/styled";


const SignUpForm = () => {
    const {form, handleInputOnChange, clear} = useForm({name:"", email:"", cpf:"", password:"", password2:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(form.password === form.password2){
            SignUp(form, clear, history)
        } else {
            alert("Sua senha não é igual a confirmação")
        }
    }
   
    return (
            <SingUpContainer>
                <form onSubmit={onSubmitForm}>
                    <TexfieldContainer>
                    <TextField
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
                    </TexfieldContainer>
                    <TexfieldContainer>
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
                    </TexfieldContainer>
                    <TexfieldContainer>
                    <TextField
                        name={"cpf"}
                        value={form.cpf}
                        onChange={handleInputOnChange}
                        label={"CPF:000.000.000-00"}
                        type={"cpf"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    </TexfieldContainer>
                    <TexfieldContainer>
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
                    </TexfieldContainer>
                    <TexfieldContainer>
                    <TextField
                        name={"password2"}
                        value={form.password2}
                        onChange={handleInputOnChange}
                        label={"Confirmar Senha"}
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    </TexfieldContainer>
                    <ButtonContainer>
                    <Button 
                    fullWidth 
                    variant="contained"
                    type="submit"
                    color="primary"
                    >
                    <p>Criar</p>
                    </Button>        
                    </ButtonContainer>            
                </form>
            </SingUpContainer>
    )
    
}

export default SignUpForm;