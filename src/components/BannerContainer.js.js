import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BannerContainer = () => {
  const [randomPkm, setRandomPkm] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const uniqueNumbers = new Set();

      // Générer 6 nombres aléatoires uniques
      while (uniqueNumbers.size < 13) {
        const randomNumber = Math.floor(Math.random() * 700) + 1;
        uniqueNumbers.add(randomNumber);
      }

      const promises = Array.from(uniqueNumbers).map((number) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      );

      try {
        const results = await Promise.all(promises);
        const pokemons = results.map((res) => res.data);
        setRandomPkm(pokemons);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="banner-container">
      {randomPkm.map((pokemon, index) => (
        <div key={index}>
          <NavLink to="/pokemon">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              title={pokemon.name}
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BannerContainer;
