import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { HeaderLogged } from "../../components/headerLogged";

const Home: React.FC = () => {
  return (
    <>
      <HeaderLogged></HeaderLogged>
      <Container>
        <main>
          <h1>Viva uma grande aventura</h1>
          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>

          <Link to="/search">
            <button>Descobrir todos os lugares</button>
          </Link>
        </main>

        <aside>
          <ul>
            <div className="column-1">
              <li>
                <div className="img"></div>
                <div className="description">
                  <p className="title">Florianópolis</p>
                  <span>98 locais</span>
                </div>
              </li>
              <li>
                <div className="img"></div>
                <div className="description">
                  <p className="title">Florianópolis</p>
                  <span>98 locais</span>
                </div>
              </li>
              <li>
                <div className="img"></div>
                <div className="description">
                  <p className="title">Florianópolis</p>
                  <span>98 locais</span>
                </div>
              </li>
            </div>

            <div className="column-2">
              <li>
                <div className="img"></div>
                <div className="description">
                  <p className="title">Florianópolis</p>
                  <span>98 locais</span>
                </div>
              </li>
              <li>
                <div className="img"></div>
                <div className="description">
                  <p className="title">Florianópolis</p>
                  <span>98 locais</span>
                </div>
              </li>
            </div>
          </ul>
        </aside>
      </Container>
    </>
  );
};

export { Home };
