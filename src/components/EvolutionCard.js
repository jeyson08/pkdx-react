import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const EvolutionCard = ({ url }) => {
  const [pkmSpeciesData, setPkmSpeciesData] = useState([]);
  const [pkmData, setPkmData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setPkmSpeciesData(res.data));
  }, [url]);

  useEffect(() => {
    pkmSpeciesData.id &&
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pkmSpeciesData.id}/`)
        .then((res) => setPkmData(res.data));
  }, [pkmSpeciesData]);

  return (
    <div className="evolution-card">
      <NavLink to={`/pokemon/${pkmData.name}`} state={{ pokemonData: pkmData }}>
        <div className="img-container">
          {pkmData.sprites && (
            <img
              src={pkmData.sprites.other["official-artwork"].front_default}
              alt={pkmData.name}
            />
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default EvolutionCard;
