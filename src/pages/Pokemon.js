import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { customId, getEnglishFlavorText } from "../components/Utils";
import StyleCard from "../components/StyleCard";
import Evolution from "../components/Evolution";

const Pokemon = () => {
  const { name } = useParams();
  const [pkmSpeciesData, setPkmSpeciesData] = useState({});
  const [pkmData, setPkmData] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then((res) => {
        setPkmSpeciesData(res.data);
      });
  }, [name]);

  const flavorText = pkmSpeciesData.flavor_text_entries
    ? getEnglishFlavorText(pkmSpeciesData.flavor_text_entries)
    : "No description available.";

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((res) => setPkmData(res.data));
  }, [name]);

  return (
    <div className="main">
      <Header />
      <div className="pokemon-container">
        {pkmSpeciesData && pkmData && (
          <div className="pkm-infos">
            <div className="pkm-header">
              <h2>{pkmSpeciesData.name}</h2>
              <p>{customId(pkmSpeciesData.id)}</p>
            </div>
            <div className="pkm-banner">
              <div className="left-banner">
                <div className="type">
                  <h3>Type</h3>
                  <ul className="pkm-types">
                    {pkmData.types &&
                      pkmData.types.map((type) => (
                        <li key={type.slot} className={type.type.name}>
                          {type.type.name}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="weakness">
                  <h3>Weakness</h3>
                </div>
              </div>
              <div className="center-banner">
                <img
                  src={
                    pkmData.sprites &&
                    pkmData.sprites.other["official-artwork"].front_default
                  }
                  alt={pkmData.name}
                />
              </div>
              <div className="right-banner">
                <div className="height">
                  <h4>Height</h4>
                  <p>{pkmData.height}</p>
                </div>
                <div className="weight">
                  <h4>Weight</h4>
                  <p>{pkmData.weight}</p>
                </div>
                <div className="abilities">
                  <h4>abilities</h4>
                  <ul>
                    {pkmData.abilities &&
                      pkmData.abilities.map((ability) => (
                        <li key={ability.ability.name}>
                          {ability.ability.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="infos">
        <div className="description">
          <p>{flavorText}</p>
        </div>
        <div className="stats">
          {pkmData.stats &&
            pkmData.stats.map((stat) => (
              <p key={stat.stat.name}>
                {stat.stat.name + ": " + stat.base_stat}
              </p>
            ))}
        </div>
      </div>
      <div className="style">
        {pkmSpeciesData.varieties &&
          pkmSpeciesData.varieties.map((style) => (
            <StyleCard key={style.pokemon.name} varieties={style} />
          ))}
      </div>
      {pkmSpeciesData.evolution_chain && (
        <Evolution url={pkmSpeciesData.evolution_chain.url} />
      )}
    </div>
  );
};

export default Pokemon;
