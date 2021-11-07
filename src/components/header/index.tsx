import React, { useCallback, useState } from "react";
import Logo from "../../assets/imgs/Logo.png";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

interface HeaderProps {
  searchCity(name: string): void;
}

const Header: React.FC<HeaderProps> = ({ searchCity }) => {
  const [typeHeader, setTypeHeader] = useState(true);
  const [city, setCity] = useState("");

  const changeCity = useCallback(
    (name) => {
      setCity(name);
      searchCity(name);
    },
    [searchCity]
  );

  return (
    <Container typeHeader={typeHeader}>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="traveler" />
        </Link>
        <div className="search">
          <AiOutlineSearch color="#A0ACB3"></AiOutlineSearch>
          <input
            type="text"
            value={city}
            onChange={(e) => changeCity(e.target.value)}
            placeholder="Qual cidade você procura?"
          />
        </div>
        <button>Acesso restrito</button>
      </div>
    </Container>
  );
};

export { Header };
