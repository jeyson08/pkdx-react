import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import customId from "./Utils";

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
    if (pkmId !== null && pkmId < 10000) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pkmId}`)
        .then((res) => setPkmSpeciesData(res.data));
    }
  }, [pkmId]);

  return (
    <div className="card">
      <NavLink
        to={`/pokemon/${pkmSoloData.name}`}
        state={{ pokemonData: pkmSoloData }}
      >
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
      </NavLink>
    </div>
  );
};

export default Card;
