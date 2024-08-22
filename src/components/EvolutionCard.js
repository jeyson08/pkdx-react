import axios from "axios";
import React, { useEffect, useState } from "react";

const EvolutionCard = ({ url }) => {
  const [pkmData, setPkmData] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setPkmData(res.data));
  }, [url]);

  return (
    <div className="evolution">
      <h1>{pkmData.name}</h1>
    </div>
  );
};

export default EvolutionCard;
