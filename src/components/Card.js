import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { customId } from "./Utils";

const Card = ({ pkm }) => {
  const [pkmSoloData, setPkmSoloData] = useState({});
  const [pkmSpeciesData, setPkmSpeciesData] = useState({});

  useEffect(() => {
    if (pkm) {
      axios.get(pkm.url).then((res) => {
        setPkmSoloData(res.data);
      });
    }
  }, [pkm]);

  useEffect(() => {
    if (pkmSoloData.species && pkmSoloData.species.url) {
      axios
        .get(pkmSoloData.species.url)
        .then((res) => setPkmSpeciesData(res.data));
    }
  }, [pkmSoloData]);

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
          <p className="pkm-id">
            {pkmSoloData.is_default
              ? pkmSoloData.id && customId(pkmSoloData.id)
              : pkmSpeciesData.id && customId(pkmSpeciesData.id)}
          </p>
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
