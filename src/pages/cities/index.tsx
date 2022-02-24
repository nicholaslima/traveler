import React, { useCallback, useEffect, useState } from "react";
import { BsEmojiFrownFill } from "react-icons/bs";
import { CityItem } from "../../components/CityItem";
import { Container, SearchButton, NoContent } from "./style";
import { connection } from "../../services/api";
import { Header } from "../../components/header";
import { Citytype } from "../../components/CityItem";

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
      const length = name.split("").length;

      const citiesFounded = cities.filter((city) => {
        if (city.name.slice(0, length) === name) {
          city.founded = true;
          return city;
        }
      });

      const citiesRest = cities.filter((city) => {
        if (city.name.slice(0, length) !== name) {
          city.founded = false;
          return city;
        }
      });

      setCity([...citiesFounded, ...citiesRest]);
    },
    [setCity, cities]
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
  console.log(cities);

  return (
    <>
      <Header searchCity={searchCity}></Header>
      {cities.length ? (
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
              </select>
            </div>
          </div>
          <ul>
            {cities.map((city, index) => (
              <CityItem
                key={index}
                name={city.name}
                active={city.founded}
                numberPlaces={city.numberPlaces}
                image={city.image}
              ></CityItem>
            ))}
          </ul>
        </Container>
      ) : (
        <NoContent>
          <BsEmojiFrownFill></BsEmojiFrownFill>
          <p>Sem resultados. Tente uma nova busca</p>
        </NoContent>
      )}
    </>
  );
};

export { Cities };
