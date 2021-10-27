import React from "react";
import Logo from "../../assets/imgs/Logo.png";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="image traveler" />
        </Link>
        <button>Acesso restrito</button>
      </div>
    </Container>
  );
};

export { Header };
