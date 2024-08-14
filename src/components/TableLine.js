import axios from "axios";
import React, { useEffect, useState } from "react";

const TableLine = ({ pkm }) => {
  const [pkmSoloData, setpkmSoloData] = useState({});

  useEffect(() => {
    if (pkm) {
      axios.get(pkm.url).then((res) => setpkmSoloData(res.data));
    }
  }, [pkm]);

  const customId = (id) => {
    if (id < 10) {
      return "#00" + id;
    } else if (id >= 10 && id < 100) {
      return "#0" + id;
    } else {
      return "#" + id;
    }
  };

  return (
    <div className="table-line">
      <p className="pkm-id">{pkmSoloData.id && customId(pkmSoloData.id)}</p>
      <p className="pkm-name">{pkmSoloData.name && pkmSoloData.name}</p>
      <img
        src={pkmSoloData.sprites && pkmSoloData.sprites.front_default}
        alt={pkmSoloData.name && pkmSoloData.name}
      />
      <img
        src={pkmSoloData.sprites && pkmSoloData.sprites.front_shiny}
        alt={pkmSoloData.name && pkmSoloData.name + " shiny"}
      />
      <ul className="pkm-types">
        {pkmSoloData.types &&
          pkmSoloData.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
          ))}
      </ul>
      <figure>
        <figcaption>Écouter le cri :</figcaption>
        <audio
          controls
          src={pkmSoloData.cries && pkmSoloData.cries.legacy}
        ></audio>
        <a href={pkmSoloData.cries && pkmSoloData.cries.legacy}>
          {" "}
          Télécharger{" "}
        </a>
      </figure>
    </div>
  );
};

export default TableLine;
