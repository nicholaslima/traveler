import React, { useCallback, useEffect, useState } from "react";
import { City } from "../../components/City";
import { Container, SearchButton } from "./style";
import { connection } from "../../services/api";
import { Header } from "../../components/header";
import { Citytype } from "../../components/City";

const Cities: React.FC = () => {
  const [cities, setCity] = useState<Citytype[]>([] as Citytype[]);
  const [typeSearch, setTypeSearch] = useState("all");

  const allCitiesSearch = useCallback(() => {
    connection.get("/cities").then((response) => {
      const { cities } = response.data;

      setCity(cities);
    });

    setTypeSearch("all");
  }, []);

  useEffect(() => {
    if (typeSearch === "all") {
      allCitiesSearch();
    }
  }, [allCitiesSearch, typeSearch]);

  const searchCity = useCallback(
    (name) => {
      connection.get(`/cities/${name}`).then((response) => {
        if (name) {
          const newCities = response.data;
          setCity([...newCities]);
        } else {
          const { cities } = response.data;
          setCity([...cities]);
        }
      });
    },
    [setCity]
  );

  const mostAccessed = useCallback(() => {
    let NumberMostAcessed: number = 0;

    cities.forEach((city) => {
      if (NumberMostAcessed < city.visits) {
        NumberMostAcessed = city.visits;
      }
    });

    let citiesMostAcessed: Citytype[] = cities.filter(
      (city) => city.visits === NumberMostAcessed
    );

    setTypeSearch("mostAccessed");

    setCity(citiesMostAcessed);
  }, [cities, setCity]);

  return (
    <>
      <Header searchCity={searchCity}></Header>
      <Container>
        <div className="search-container">
          <h1>Selecione uma cidade</h1>
          <div className="search">
            <SearchButton
              active={typeSearch === "all"}
              onClick={() => setTypeSearch("all")}
            >
              Todas
            </SearchButton>
            <SearchButton
              active={typeSearch === "mostAccessed"}
              onClick={mostAccessed}
            >
              Mais acessadas
            </SearchButton>
            <select name="letter" id="">
              <option value="">A - Z</option>
              <option value="a">a</option>
            </select>
          </div>
        </div>
        <ul>
          {cities.map((city, index) => (
            <City
              key={index}
              name={city.name}
              visits={city.visits}
              numberPlaces={city.numberPlaces}
              image={city.image}
            ></City>
          ))}
        </ul>
      </Container>
    </>
  );
};

export { Cities };
