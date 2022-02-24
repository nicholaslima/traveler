import React, { useState } from "react";
import { Container, ImageCity } from "./style";
import { useHistory } from "react-router-dom";

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
}

const CityItem: React.FC<cityProps> = ({
  active,
  name,
  image,
  numberPlaces,
}) => {
  const { push } = useHistory();
  return (
    <Container isActive={active} onClick={() => push(`city/${name}`)}>
      <ImageCity img={image}></ImageCity>
      <div className="description">
        <p className="title">{name}</p>
        <span>{numberPlaces} locais</span>
      </div>
    </Container>
  );
};

export { CityItem };
