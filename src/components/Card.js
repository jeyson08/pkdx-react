import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ pkm }) => {
  const [pkmSoloData, setpkmSoloData] = useState({});

  useEffect(() => {
    if (pkm) {
      axios.get(pkm.url).then((res) => setpkmSoloData(res.data));
    }
  }, [pkm]);

  const customId = (id) => {
    if (id < 10) {
      return "000" + id;
    } else if (id >= 10 && id < 100) {
      return "00" + id;
    } else if (id >= 100 && id < 1000) {
      return "0" + id;
    } else {
      return id;
    }
  };

  return (
    <div className="card">
      <div className="img-container">
        <img
          src={
            pkmSoloData.sprites &&
            pkmSoloData.sprites.other["official-artwork"].front_default
          }
          alt={pkmSoloData.name && pkmSoloData.name}
        />
      </div>
      <div className="infos-container">
        <p className="pkm-id">{pkmSoloData.id && customId(pkmSoloData.id)}</p>
        <p className="pkm-name">{pkmSoloData.name && pkmSoloData.name}</p>
        <ul className="pkm-types">
          {pkmSoloData.types &&
            pkmSoloData.types.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
