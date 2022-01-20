import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage"
import EditAdressPage from "../pages/EditAdressPage/EditAdressPage"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import SignAddressPage from "../pages/SignAddressPage/SignAddressPage";
import SplashScreen from "../components/SplashScreem/SplashScreem";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/carrinho">
                    <CartPage/>
                </Route>

                <Route exact path="/editarendereco">
                    <EditAdressPage/>
                </Route>

                <Route exact path="/editarperfil">
                    <EditProfilePage/>
                </Route>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/perfil">
                    <ProfilePage/>
                </Route>

                <Route exact path="/restaurante/:id">
                    <RestaurantPage/>
                </Route>

                <Route exact path="/buscar">
                    <SearchPage/>
                </Route>

                <Route exact path="/cadastrar">
                    <SignUpPage/>
                </Route>

                <Route exact path="/cadastrarendereco">
                    <SignAddressPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    
    )
}

export default Router