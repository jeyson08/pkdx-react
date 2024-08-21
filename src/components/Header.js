import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <NavLink to="/">
          <h1>Pokédex</h1>
        </NavLink>
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
