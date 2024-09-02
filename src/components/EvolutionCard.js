import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <div className="img-container">
        {pkmData.sprites && (
          <img
            src={pkmData.sprites.other["official-artwork"].front_default}
            alt={pkmData.name}
          />
        )}
      </div>
    </div>
  );
};

export default EvolutionCard;
