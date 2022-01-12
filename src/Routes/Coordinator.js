export const goToHome = (history) => {
    history.push("/")
}

export const goToCart = (history) => {
    history.push("/carrinho")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToEditAdress = (history) => {
    history.push("/editarendereco")
}

export const goToEditProfile = (history) => {
    history.push("/editarperfil")
}

export const goToProfile = (history) => {
    history.push("/perfil")
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToSearch = (history) => {
    history.push("/buscar")
}

export const goToSignUp = (history) => {
    history.push("/cadastrar")
}

export const goToSignAddress = (history) => {
    history.push("/cadastrarendereco")
}