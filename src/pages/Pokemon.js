import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import customId from "../components/Utils";

const Pokemon = () => {
  const { name } = useParams();
  const [pkmSpeciesData, setPkmSpeciesData] = useState({});
  const [pkmData, setPkmData] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then((res) => setPkmSpeciesData(res.data));
  }, [name]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => setPkmData(res.data));
  }, [name]);

  return (
    <div className="main">
      <Header />
      <div className="pokemon-container">
        {pkmSpeciesData && (
          <div className="pkm-infos">
            <div className="pkm-header">
              <h2>{pkmSpeciesData.name}</h2>
              <p>{customId(pkmSpeciesData.id)}</p>
            </div>
            <div className="pkm-banner">
              <div className="left-banner"></div>
              <div className="center-banner">
                <img
                  src={
                    pkmData.sprites &&
                    pkmData.sprites.other["official-artwork"].front_default
                  }
                  alt=""
                />
              </div>
              <div className="right-banner"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
