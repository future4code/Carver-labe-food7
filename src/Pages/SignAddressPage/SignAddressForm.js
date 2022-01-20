import React from "react";
import { SignAddress } from '../../services/Access'
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignAddressForm = () => {
    const {form, handleInputOnChange, clear} = useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignAddress(form, clear, history)
    }

    return (
            <div>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"street"}
                        value={form.street}
                        onChange={handleInputOnChange}
                        label={"Logradouro"}
                        placeholder={"Rua/Av."}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"number"}
                        value={form.number}
                        onChange={handleInputOnChange}
                        label={"Número"}
                        placeholder={"Número"}
                        type={"number"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"complement"}
                        value={form.complement}
                        onChange={handleInputOnChange}
                        label={"Complemento"}
                        placeholder={"Apto. /Bloco"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                    />
                    <TextField
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        onChange={handleInputOnChange}
                        label={"Bairro"}
                        placeholder={"Bairro"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"city"}
                        value={form.city}
                        onChange={handleInputOnChange}
                        label={"Cidade"}
                        placeholder={"Cidade"}
                        type={"text"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"state"}
                        value={form.state}
                        onChange={handleInputOnChange}
                        label={"Estado"}
                        placeholder={"Estado"}
                        type={"Text"}
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
                    <p>Salvar</p>
                    </Button>
                </form>
            </div>
    )
}

export default SignAddressForm; 