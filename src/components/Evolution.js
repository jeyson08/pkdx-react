import axios from "axios";
import React, { useEffect, useState } from "react";

const Evolution = ({ url }) => {
  const [evolutionData, setEvolutionData] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setEvolutionData(res.data));
  }, [url]);

  return (
    <div className="evolution-container">
      {evolutionData.chain && (
        <div className="evolutions">
          <div className="evolution">
            {evolutionData.chain.species.name &&
              evolutionData.chain.species.name}
          </div>
          {evolutionData.chain.evolves_to &&
            evolutionData.chain.evolves_to.map((evolution) => (
              <div className="evolution" key={evolution.species.name}>
                {evolution.species.name}
              </div>
            ))}
          {evolutionData.chain.evolves_to &&
            evolutionData.chain.evolves_to.map((evolution) =>
              evolution.evolves_to.map((evolution) => (
                <div className="evolution" key={evolution.species.name}>
                  {evolution.species.name}
                </div>
              ))
            )}
        </div>
      )}
    </div>
  );
};

export default Evolution;
