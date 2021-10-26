import React from "react";
import { Container } from "./style";

const Home: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>Viva uma grande aventura</h1>
        <p>
          Descubra locais incríveis para se visitar em cidades maravilhosas de
          Santa Catarina.
        </p>

        <button>Descobrir todos os lugares</button>
      </main>

      <aside>
        <ul>
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
        </ul>
      </aside>
    </Container>
  );
};

export { Home };
