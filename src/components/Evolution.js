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

  const hasFinalEvolution =
    evolutionChain.evolves_to &&
    evolutionChain.evolves_to.some(
      (evolution) => evolution.evolves_to && evolution.evolves_to.length > 0
    );

  return (
    <div className="evolution-container">
      <h3>évolution</h3>
      <div className="evolution">
        <div className="primaire">
          {evolutionChain.species && (
            <EvolutionCard
              key={evolutionChain.species.url}
              url={evolutionChain.species.url}
            />
          )}
        </div>
        {evolutionChain.evolves_to && evolutionChain.evolves_to.length > 0 && (
          <div className="secondaire">
            {evolutionChain.evolves_to &&
              evolutionChain.evolves_to.map((evolution) => (
                <EvolutionCard
                  key={evolution.species.url}
                  url={evolution.species.url}
                />
              ))}
          </div>
        )}
        {hasFinalEvolution && (
          <div className="final">
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
        )}
      </div>
    </div>
  );
};

export default Evolution;
