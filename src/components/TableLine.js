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
      <p>{pkmSoloData && customId(pkmSoloData.id)}</p>
      <p>{pkmSoloData && pkmSoloData.name}</p>
      <img
        src={pkmSoloData.sprites && pkmSoloData.sprites.front_default}
        alt={pkmSoloData.name}
      />
    </div>
  );
};

export default TableLine;
