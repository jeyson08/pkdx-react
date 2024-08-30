import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { customId } from "./Utils";

const NextPkm = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState({});

  let newPokemonId = pokemonId + 1;

  if (pokemonId === 1025) {
    newPokemonId = 10001;
  }

  useEffect(() => {
    if (newPokemonId < 10277) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${newPokemonId}/`)
        .then((res) => setPokemonData(res.data));
    }
  }, [newPokemonId]);
  return (
    <div className="next" title={pokemonData.name && pokemonData.name}>
      {pokemonData && pokemonData.id < 10277 && (
        <NavLink
          to={`/pokemon/${pokemonData.name}`}
          state={{ pokemonData: pokemonData }}
        >
          <div className="arrow-container">
            <p className="arrow">{">"}</p>
          </div>
          <div className="infos-next">
            <p className="id">{pokemonData.id && customId(pokemonData.id)}</p>
            <p className="name">{pokemonData.name && pokemonData.name}</p>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default NextPkm;
