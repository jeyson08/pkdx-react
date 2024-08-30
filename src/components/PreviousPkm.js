import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { customId } from "./Utils";

const PreviousPkm = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState({});

  let newPokemonId = pokemonId - 1;

  if (pokemonId === 10001) {
    newPokemonId = 1025;
  }

  useEffect(() => {
    if (newPokemonId > 1) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${newPokemonId}/`)
        .then((res) => setPokemonData(res.data));
    }
  }, [newPokemonId]);
  return (
    <div className="previous" title={pokemonData.name && pokemonData.name}>
      {pokemonData && pokemonData.id > 1 && (
        <NavLink
          to={`/pokemon/${pokemonData.name}`}
          state={{ pokemonData: pokemonData }}
        >
          <div className="arrow-container">
            <p className="arrow">{"<"}</p>
          </div>

          <div className="infos-previous">
            <p className="id">{pokemonData.id && customId(pokemonData.id)}</p>
            <p className="name">{pokemonData.name && pokemonData.name}</p>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default PreviousPkm;
