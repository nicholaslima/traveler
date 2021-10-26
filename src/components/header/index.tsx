import React from "react";
import Logo from "../../assets/imgs/Logo.png";
import { Container } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <img src={Logo} alt="" />

        <button>Acesso restrito</button>
      </div>
    </Container>
  );
};

export { Header };
