import React, { useEffect, useState } from "react";
import { City } from "../../components/City";
import { Container } from "./style";
import { connection } from "../../services/api";

import { Citytype } from "../../components/City";

const Cities: React.FC = () => {
  const [cities, setCity] = useState<Citytype[]>([] as Citytype[]);

  useEffect(() => {
    connection.get("/cities").then((response) => {
      const { cities } = response.data;
      console.log(cities);

      setCity(cities);
    });
  }, []);

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
        {cities.map((city, index) => (
          <li>
            <City
              key={index}
              name={city.name}
              numberPlaces={city.numberPlaces}
              image={city.image}
            ></City>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export { Cities };
