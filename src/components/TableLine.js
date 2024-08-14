import axios from "axios";
import React, { useEffect, useState } from "react";

const TableLine = ({ pkm }) => {
  const [pkmSoloData, setpkmSoloData] = useState({});

  useEffect(() => {
    if (pkm) {
      axios.get(pkm.url).then((res) => setpkmSoloData(res.data));
    }
  }, [pkm]);

  return (
    <div className="table-line">
      <h1>{pkmSoloData && pkmSoloData.name}</h1>
      <img
        src={pkmSoloData.sprites && pkmSoloData.sprites.front_default}
        alt={pkmSoloData.name}
      />
    </div>
  );
};

export default TableLine;
