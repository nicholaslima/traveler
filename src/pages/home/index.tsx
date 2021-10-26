import React from "react";

const Home: React.FC = () => {
  return (
    <>
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
            <img src="" alt="" />
            <span className="decription"></span>
          </li>
          <li>
            <img src="" alt="" />
            <span className="decription"></span>
          </li>
          <li>
            <img src="" alt="" />
            <span className="decription"></span>
          </li>
          <li>
            <img src="" alt="" />
            <span className="decription"></span>
          </li>
          <li>
            <img src="" alt="" />
            <span className="decription"></span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export { Home };
