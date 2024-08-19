import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ pkm }) => {
  const [pkmSoloData, setPkmSoloData] = useState({});
  const [pkmSpeciesData, setPkmSpeciesData] = useState({});
  const [pkmId, setPkmId] = useState(null);

  useEffect(() => {
    if (pkm) {
      axios.get(pkm.url).then((res) => {
        setPkmSoloData(res.data);
        res.data.id && setPkmId(res.data.id);
      });
    }
  }, [pkm]);

  useEffect(() => {
    if (pkmId !== null) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pkmId}`)
        .then((res) => setPkmSpeciesData(res.data));
    }
  }, [pkmId]);

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
      <p>
        {pkmSpeciesData.flavor_text_entries &&
          pkmSpeciesData.flavor_text_entries[1].flavor_text}
      </p>
      <div className="img-container">
        <img
          src={
            pkmSoloData.sprites &&
            pkmSoloData.sprites.other["official-artwork"].front_default
              ? pkmSoloData.sprites.other["official-artwork"].front_default
              : "/img/masterball.png"
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
              <li key={type.slot} className={type.type.name}>
                {type.type.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
