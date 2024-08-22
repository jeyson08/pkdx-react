import axios from "axios";
import React, { useEffect, useState } from "react";
import EvolutionCard from "./EvolutionCard";

const Evolution = ({ url }) => {
  const [evolutionData, setEvolutionData] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setEvolutionData(res.data));
  }, [url]);

  return (
    <div className="evolution-container">
      {evolutionData.chain && (
        <div className="evolutions">
          <EvolutionCard
            url={
              evolutionData.chain.species.url && evolutionData.chain.species.url
            }
          />
          {evolutionData.chain.evolves_to &&
            evolutionData.chain.evolves_to.map((evolution) => (
              <EvolutionCard
                key={evolution.species.name}
                url={evolution.species.url}
              />
            ))}
          {evolutionData.chain.evolves_to &&
            evolutionData.chain.evolves_to.map((evolution) =>
              evolution.evolves_to.map((evolution) => (
                <EvolutionCard
                  key={evolution.species.name}
                  url={evolution.species.url}
                />
              ))
            )}
        </div>
      )}
    </div>
  );
};

export default Evolution;
