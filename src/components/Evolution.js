import axios from "axios";
import React, { useEffect, useState } from "react";
import EvolutionCard from "./EvolutionCard";

const Evolution = ({ pkmSpeciesData }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    pkmSpeciesData.evolution_chain &&
      axios
        .get(pkmSpeciesData.evolution_chain.url)
        .then((res) => setEvolutionChain(res.data.chain));
  }, [pkmSpeciesData]);

  return (
    <div className="evolution">
      <h3>Evolution</h3>
      {evolutionChain.species && (
        <EvolutionCard
          key={evolutionChain.species.url}
          url={evolutionChain.species.url}
        />
      )}
      {evolutionChain.evolves_to &&
        evolutionChain.evolves_to.map((evolution) => (
          <EvolutionCard
            key={evolution.species.url}
            url={evolution.species.url}
          />
        ))}
      {evolutionChain.evolves_to &&
        evolutionChain.evolves_to.map((evolution) =>
          evolution.evolves_to.map((evolution) => (
            <EvolutionCard
              key={evolution.species.url}
              url={evolution.species.url}
            />
          ))
        )}
    </div>
  );
};

export default Evolution;
