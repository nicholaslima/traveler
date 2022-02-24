import React from "react";
import Logo from "../../assets/imgs/Logo.png";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { BiArrowBack } from "react-icons/bi";

const HeaderCity: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="block-logo">
          <Link to="/">
            <img src={Logo} alt="traveler" />
          </Link>
          <Link className="btn-voltar" to="/search">
            <BiArrowBack></BiArrowBack>
          </Link>
        </div>

        <p>Cidade</p>

        <button>Acesso restrito</button>
      </div>
    </Container>
  );
};

export { HeaderCity };
