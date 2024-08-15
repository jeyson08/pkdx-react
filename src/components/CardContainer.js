// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = ({ pkmData }) => {
  return (
    <div className="card-container">
      {pkmData && pkmData.map((pkm, index) => <Card pkm={pkm} key={index} />)}
    </div>
  );
};

export default CardContainer;
