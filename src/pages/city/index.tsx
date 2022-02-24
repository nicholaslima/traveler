import React, { useEffect, useState } from "react";

import { Container, BannerCity } from "./style";
import { HeaderCity } from "../../components/headerCity";
import { connection } from "../../services/api";
import { useLocation, useRouteMatch } from "react-router";

interface routeParam {
  name: string;
}

interface cityType {
  name: string;
  image: string;
  numberPlaces: number;
  visits: string;
}

const City: React.FC = () => {
  const { params } = useRouteMatch<routeParam>();
  const [city, setCity] = useState<cityType>();

  console.log(params.name);

  useEffect(() => {
    connection.get(`cities/${params.name}`).then((response) => {
      const data = response.data;

      const { name, image, numberPlaces, visits } = data[0];

      const city = {
        name,
        image,
        numberPlaces,
        visits,
      };

      setCity(city);
    });
  }, []);

  return (
    <>
      <HeaderCity></HeaderCity>
      <Container>
        <img src={city?.image}></img>

        <div className="details">
          <h1 className="title">{city?.name}</h1>
          <p className="description"></p>
          <div className="grid-details">
            <div className="turism"></div>
            <div className="foods"></div>
            <div className="events"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export { City };
