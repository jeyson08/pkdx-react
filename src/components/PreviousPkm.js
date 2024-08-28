import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
    <div className="previous">
      {pokemonData && pokemonData.id > 1 && (
        <NavLink
          to={`/pokemon/${pokemonData.name}`}
          state={{ pokemonData: pokemonData }}
        >
          Previous
        </NavLink>
      )}
    </div>
  );
};

export default PreviousPkm;
