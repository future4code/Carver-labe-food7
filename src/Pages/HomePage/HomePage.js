import React, { useState } from "react";
import CardRestaurante from "../../Components/CardRestaurante";
import Menu from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/URL";
import useRequestData from "../../Hooks/useRequestData";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useForm from "../../Hooks/useForm";
import TextField from "@mui/material/TextField";
import { FeedContainer, TextMenu } from "./styled";

const HomePage = () => {
  useProtectedPage();

  const restaurantes = useRequestData([], `${BASE_URL}/restaurants`);


  const { form, handleInputOnChange } = useForm({ filtroRestaurante: "" });
  const [filtroTipo, setFiltroTipo] = useState("");

  const handleTipe = (value) => {
    setFiltroTipo(value);
  };


  const renderRestaurantes = restaurantes.restaurants && restaurantes.restaurants
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
        <FeedContainer>
          <TextMenu>Rapp4</TextMenu>
          <label>
            <TextField
              name={"filtroRestaurante"}
              value={form.filtroRestaurante}
              onChange={handleInputOnChange}
              label={"Restaurante"}
              type={"text"}
              variant={"outlined"}
              fullWidth
              margin={"dense"}
            />
          </label>
          <p>
            <strong onClick={() => handleTipe("Hamburguer")}>Hamburguer</strong>
            <strong onClick={() => handleTipe("Asiática")}>Asiática</strong>
            <strong onClick={() => handleTipe("Árabe")}>Árabe</strong>
            <strong onClick={() => handleTipe("Saudável")}>Saudável</strong>
            <strong onClick={() => handleTipe("Italiana")}>Italiana</strong>
            <strong onClick={() => handleTipe("Sorvetes")}>Sorvetes</strong>
            <strong onClick={() => handleTipe("Carnes")}>Carnes</strong>
            <strong onClick={() => handleTipe("Baiana")}>Baiana</strong>
            <strong onClick={() => handleTipe("Petiscos")}>Petiscos</strong>
            <strong onClick={() => handleTipe("Mexicana")}>Mexicana</strong>
          </p>
          {renderRestaurantes}
          <Menu />
        </FeedContainer>
    );
}

export default HomePage;
