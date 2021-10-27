import React from "react";
import { Container } from "./style";

interface Citytype {
  img: string;
  name: string;
  NumberPlaces: number;
}

const City: React.FC<Citytype> = ({ name, img, NumberPlaces }) => {
  return (
    <Container>
      <div className="img"></div>
      <div className="description">
        <p className="title">Florianópolis</p>
        <span>98 locais</span>
      </div>
    </Container>
  );
};

export { City };
