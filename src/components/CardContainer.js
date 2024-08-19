import React, { useState, useEffect } from "react";
import Card from "./Card";

// Fonction pour mélanger un tableau
function shuffleArray(array) {
  let shuffledArray = [...array]; // Copie du tableau pour éviter de modifier l'original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const CardContainer = ({ pkmData, searchClik }) => {
  const [loadMore, setLoadMore] = useState(16);
  const [displayedPkmData, setDisplayedPkmData] = useState([]);

  // Mélanger les Pokémon une seule fois lorsque searchClik devient true
  useEffect(() => {
    if (searchClik) {
      setDisplayedPkmData(shuffleArray(pkmData));
    } else {
      setDisplayedPkmData(pkmData);
    }
  }, [searchClik, pkmData]);

  // Mélanger les Pokémon si searchClik est true
  // const displayedPkmData = searchClik ? shuffleArray(pkmData) : pkmData;
  return (
    <div className="card-container">
      {displayedPkmData &&
        displayedPkmData
          .map((pkm, index) => <Card pkm={pkm} key={index} />)
          .slice(0, loadMore)}
      <button className="load" onClick={() => setLoadMore(loadMore + 16)}>
        Load more Pokémon
      </button>
    </div>
  );
};

export default CardContainer;
