import React, { useEffect } from "react";

const PreviousPkm = ({ pkmId }) => {
  useEffect(() => {
    if (pkmId) {
      console.log(pkmId);
    }
  }, [pkmId]);
  return (
    <div>
      <h1>previous</h1>
    </div>
  );
};

export default PreviousPkm;
