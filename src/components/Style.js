import React from "react";
import StyleCard from "./StyleCard";

const Style = ({ pkmSpeciesData }) => {
  return (
    <div className="style-container">
      <h3>style</h3>
      <div className="stylecard-container">
        {pkmSpeciesData.varieties &&
          pkmSpeciesData.varieties.map((variety) => (
            <StyleCard
              url={variety.pokemon.url}
              key={variety.pokemon.name}
              id={pkmSpeciesData.id && pkmSpeciesData.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Style;
