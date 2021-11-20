import React from "react";
import { Container, ImageCity } from "./style";

export interface Citytype {
  image: string;
  name: string;
  numberPlaces: number;
  visits: number;
}

const City: React.FC<Citytype> = ({ visits, name, image, numberPlaces }) => {
  return (
    <Container>
      <ImageCity img={image}></ImageCity>
      <div className="description">
        <p className="title">{name}</p>
        <span>{numberPlaces} locais</span>
      </div>
    </Container>
  );
};

export { City };
