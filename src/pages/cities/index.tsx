import React from "react";
import { City } from "../../components/City";
import { Container } from "./style";

const Cities: React.FC = () => {
  return (
    <Container>
      <div className="search-container">
        <h1>Selecione uma cidade</h1>
        <div className="search">
          <p className="title-search active">Todas</p>
          <p className="title-search">Mais acessadas</p>
          <select name="letter" id="">
            <option value="">A - Z</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
      <ul>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
        <li>
          <City name="floripa" NumberPlaces={10} img="sdfsdf"></City>
        </li>
      </ul>
    </Container>
  );
};

export { Cities };
