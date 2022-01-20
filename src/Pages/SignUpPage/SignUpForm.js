import React from "react";
import { SignUp } from '../../services/Access'
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SingUpFormContainer, TexfieldContainer, ButtonCadastro } from "../SignUpPage/styled";



const SignUpForm = () => {
    const {form, handleInputOnChange, clear} = useForm({name:"", email:"", cpf:"", password:"", password2:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(form.password === form.password2){
            SignUp(form, clear, history)
        } else {
            alert("As senhas informadas não são iguais")
        }
    }
   
    return (
            <SingUpFormContainer>
                <form onSubmit={onSubmitForm}>
                    <TexfieldContainer>
                    <TextField
                        name={"name"}
                        value={form.username}
                        onChange={handleInputOnChange}
                        label={"Nome"} 
                        placeholder="Nome e sobrenome"                      
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
                        placeholder="email@email.com"                       
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
                        label={"CPF"}
                        placeholder="000.000.000-00"
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
                        placeholder="Mínimo de 6 caracters"
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    
                    <TextField
                        name={"password2"}
                        value={form.password2}
                        onChange={handleInputOnChange}
                        label={"Confirmar"}
                        placeholder="Confirme a senha anterior"
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    </TexfieldContainer>
                    <ButtonCadastro>
                    <Button fullWidth variant="contained" type="submit" color="primary">
                     <p>Criar</p>
                     </Button>      
                     </ButtonCadastro>
                           
                </form>
            </SingUpFormContainer>
    )
    
}

export default SignUpForm;