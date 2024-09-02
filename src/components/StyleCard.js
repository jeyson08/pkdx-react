import axios from "axios";
import React, { useEffect, useState } from "react";
import { customId } from "./Utils";
import { NavLink } from "react-router-dom";

const StyleCard = ({ url, id }) => {
  const [pkmData, setPkmData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setPkmData(res.data));
  }, [url]);

  return (
    <div className="style-card">
      <NavLink to={`/pokemon/${pkmData.name}`} state={{ pokemonData: pkmData }}>
        <div className="img-container">
          {pkmData.sprites && (
            <img
              src={pkmData.sprites.other["official-artwork"].front_default}
              alt={pkmData.name}
            />
          )}
        </div>
        <div className="style-info">
          {id && <p className="id">{customId(id)}</p>}
          {pkmData.name && <p className="name">{pkmData.name}</p>}
        </div>
        <ul className="types">
          {pkmData.types &&
            pkmData.types.map((type) => (
              <li className={type.type.name} key={type.type.name}>
                {type.type.name}
              </li>
            ))}
        </ul>
      </NavLink>
    </div>
  );
};

export default StyleCard;
