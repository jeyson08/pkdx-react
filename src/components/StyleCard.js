import axios from "axios";
import React, { useEffect, useState } from "react";
import { customId } from "./Utils";

const StyleCard = ({ varieties, pkmSpeciesData }) => {
  const [styleData, setStyleData] = useState({});

  useEffect(() => {
    axios.get(varieties.pokemon.url).then((res) => setStyleData(res.data));
  }, [varieties]);

  return (
    <div className="style-card-container">
      {styleData && (
        <div className="style-card">
          <div className="img-container">
            {styleData.sprites && (
              <img
                src={styleData.sprites.other["official-artwork"].front_default}
                alt={styleData.name}
              ></img>
            )}
          </div>
          <div className="infos">
            <p>{customId(styleData.id)}</p>
            <h5>{styleData.name}</h5>
          </div>
          <div className="types">
            <ul>
              {styleData.types &&
                styleData.types.map((type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleCard;
