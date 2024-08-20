import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="animation"></div>
      <header>
        <h1>Pokédex</h1>
        <p>
          Created by Jeyson Boursault using React.js, Sass and the{" "}
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            PokéAPI
          </a>
          .
        </p>
      </header>
    </div>
  );
};

export default Header;
