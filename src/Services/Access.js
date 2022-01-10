import axios from "axios"
import { BASE_URL } from "../constants/URL"
import { goToHome } from "../routes/Coordinator"


export const SignUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("Cadastro Realizado com sucesso!")
        clear()
        setIsLoading(false)
        goToHome(history)
        setRightButtonText("Logout")
    })
    .catch((err)=>{
        console.log(err)
        setIsLoading(false)
        alert("Possiveis erros: senha com menos de 8 caracteres, e-mail já criado, senha igual a de outro usuário!")
    })
}