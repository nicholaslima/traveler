import React from "react";
import Logo from "../../assets/imgs/Logo.png";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderLogged: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="traveler" />
        </Link>
        <button>Acesso restrito</button>
      </div>
    </Container>
  );
};

export { HeaderLogged };
