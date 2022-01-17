import React, { useState } from "react";
import CardRestaurante from "../../components/CardRestaurante/CardRestaurante";
import Menu from "../../components/Menu/Menu";
import { BASE_URL } from "../../constants/URL";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";
import { goToSearch } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/header";
import CardPedido from "../../components/CardPedido/CardPedido";
import { TextField } from "@mui/material";
import {
  HomePageContainer,
  FiltroHomeContainer,
  TextFiltroHome,
  InputContainer,
  RestaurantesContainer
} from "./styled";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);

  const { form, handleInputOnChange } = useForm({ filtroRestaurante: "" });
  const [filtroTipo, setFiltroTipo] = useState("");

  const handleTipe = (value) => {
    if (value === filtroTipo) {
      setFiltroTipo("");
    } else {
      setFiltroTipo(value);
    }
  };

  const renderRestaurantes =
    restaurantes.restaurants &&
    restaurantes.restaurants
      .filter((restaurante) => {
        return (
          restaurante.name
            .toLowerCase()
            .includes(form.filtroRestaurante.toLowerCase()) &&
          restaurante.category.includes(filtroTipo)
        );
      })
      .map((restaurante) => {
        return (
          <div key={restaurante.id}>
            <CardRestaurante
              id={restaurante.id}
              src={restaurante.logoUrl}
              name={restaurante.name}
              deliveryTime={restaurante.deliveryTime}
              shipping={restaurante.shipping}
            />
          </div>
        );
      });

  return (
    <>
      <Header title={"Rappi4"} />
      <HomePageContainer>
        <InputContainer>
          <TextField
            name={"filtroRestaurante"}
            value={form.filtroRestaurante}
            onChange={handleInputOnChange}
            onClick={() => goToSearch(history)}
            label={"Restaurante"}
            type={"text"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
          />
        </InputContainer>
        <FiltroHomeContainer>
          <TextFiltroHome onClick={() => handleTipe("Hamburguer")}>
            Hamburguer
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Asiática")}>
            Asiática
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Árabe")}>
            Árabe
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Italiana")}>
            Italiana
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Sorvetes")}>
            Sorvetes
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Carnes")}>
            Carnes
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Baiana")}>
            Baiana
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Petiscos")}>
            Petiscos
          </TextFiltroHome>
          <TextFiltroHome onClick={() => handleTipe("Mexicana")}>
            Mexicana
          </TextFiltroHome>
        </FiltroHomeContainer>
        <RestaurantesContainer>{renderRestaurantes}</RestaurantesContainer>
      </HomePageContainer>
      <CardPedido />
      <Menu />
    </>
  );
};

export default HomePage;
