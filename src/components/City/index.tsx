import React, { useState } from "react";
import { Container, ImageCity } from "./style";

export interface Citytype {
  image: string;
  name: string;
  numberPlaces: number;
  founded: boolean;
  visits: number;
}

interface cityProps {
  image: string;
  name: string;
  numberPlaces: number;
  active: boolean;
  visits: number;
}

const City: React.FC<cityProps> = ({
  visits,
  active,
  name,
  image,
  numberPlaces,
}) => {
  console.log(active);
  return (
    <Container isActive={active}>
      <ImageCity img={image}></ImageCity>
      <div className="description">
        <p className="title">{name}</p>
        <span>{numberPlaces} locais</span>
      </div>
    </Container>
  );
};

export { City };
