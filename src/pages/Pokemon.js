import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { customId } from "../components/Utils";
import PreviousPkm from "../components/PreviousPkm";
import NextPkm from "../components/NextPkm";
import {
  RadarChart,
  PolarGrid,
  Legend,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const baseMaxStats = {
  hp: 255,
  attack: 190,
  defense: 230,
  "special-attack": 194,
  "special-defense": 230,
  speed: 180,
};

const Pokemon = () => {
  const { name } = useParams();
  const location = useLocation();
  const [pokemonData, setPokemonData] = useState(
    location.state?.pokemonData || null
  );
  const [pkmSpeciesData, setPkmSpeciesData] = useState({});
  const [description, setDescription] = useState("");
  const [statData, setStatData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemonData(res.data);
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des données pokemon:",
          error
        )
      );
  }, [name]);

  useEffect(() => {
    setStatData(
      pokemonData.stats &&
        pokemonData.stats.map((stat) => {
          const maxBaseStat = baseMaxStats[stat.stat.name] || 255;
          return {
            stat: stat.stat.name,
            result: (stat.base_stat / maxBaseStat) * 100,
            fullMark: maxBaseStat,
          };
        })
    );
  }, [pokemonData.stats]);

  useEffect(() => {
    if (pokemonData.species && pokemonData.species.url) {
      axios.get(pokemonData.species.url).then((res) => {
        setPkmSpeciesData(res.data);
        const flavorTextEntry = res.data.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );

        if (flavorTextEntry) {
          setDescription(flavorTextEntry.flavor_text);
        }
      });
    }
  }, [pokemonData]);

  return (
    <div className="pokemon">
      <div className="overlay"></div>
      <Header />
      {pokemonData && (
        <div className="pokemon-container">
          <div className="pokemon-header">
            <PreviousPkm pokemonId={pokemonData.id && pokemonData.id} />
            <div className="infos">
              <p>
                {pokemonData.is_default
                  ? customId(pokemonData.id)
                  : customId(pkmSpeciesData.id)}
              </p>
              <h2>{pokemonData.name}</h2>
            </div>
            <NextPkm pokemonId={pokemonData.id && pokemonData.id} />
          </div>
          <div className="principal">
            <div className="left">
              <div className="types-container">
                <h4>Type</h4>
                <ul className="types">
                  {pokemonData.types &&
                    pokemonData.types.map((type) => (
                      <li key={type.type.name} className={type.type.name}>
                        {type.type.name}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="weaknesses-container">
                <h4>Weakness</h4>
              </div>
            </div>
            <div className="middle">
              <div className="animation"></div>
              <div className="img-container">
                {pokemonData.sprites && (
                  <img
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={pokemonData.name}
                  />
                )}
              </div>
            </div>
            <div className="right">
              <div className="infos">
                <div className="height">
                  <h4>Height</h4>
                  <p>{pokemonData.height && pokemonData.height / 10} m</p>
                </div>
                <div className="weight">
                  <h4>Weight</h4>
                  <p>{pokemonData.weight && pokemonData.weight / 10} kg</p>
                </div>
                <div className="ability">
                  <h4>Ability</h4>
                  <ul className="abilities">
                    {pokemonData.abilities &&
                      pokemonData.abilities.map((ability) => (
                        <li key={ability.ability.name}>
                          {ability.ability.name}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="category">
                  <h4>Category</h4>
                  {/* <p>
                    {pkmSpeciesData.genera && pkmSpeciesData.genera[7].genus}
                  </p> */}
                </div>
                <div className="gender">
                  <h4>Gender</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="infos">
            <div className="left">
              <h3>Description</h3>
              <p className="resume">{description}</p>
            </div>
            <div className="right">
              <h3>Status</h3>
              <ResponsiveContainer width="80%" height="80%">
                <RadarChart data={statData}>
                  <PolarGrid stroke="white" />
                  <PolarAngleAxis dataKey="stat" stroke="white" />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    axisLine={false}
                    tick={false}
                  />
                  <Radar
                    name={pokemonData.name && pokemonData.name}
                    dataKey="result"
                    stroke="#00d2ff"
                    fill="#00d2ff"
                    fillOpacity={0.6}
                  />
                  <Legend content={() => null} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="style"></div>
          <div className="evolution"></div>
        </div>
      )}
      <button>Back to Pokédex</button>
    </div>
  );
};

export default Pokemon;
