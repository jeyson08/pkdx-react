import React, { useEffect } from "react";

const SearchEngine = ({
  searchClik,
  setSearchClik,
  search,
  setSearch,
  setInputValue,
}) => {
  useEffect(() => {
    if (search === false) {
      const searchInput = document.querySelector("#search"); // Sélectionner l'élément input avec l'ID search
      if (searchInput) {
        searchInput.value = ""; // Réinitialiser la valeur de l'input
      }
    }
  }, [search]);

  return (
    <div className="search-engine">
      <div className="search-options">
        <div className="search">
          <button
            onClick={() =>
              search === false ? setSearch(true) : setSearch(false)
            }
          >
            {search === true ? "Cancel" : "Search"}
          </button>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="ex: Charizard, 6, Pikachu, ..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label htmlFor="search">Search by name or number</label>
        </div>
        <div className="random">
          <button
            onClick={() =>
              searchClik === false ? setSearchClik(true) : setSearchClik(false)
            }
          >
            {searchClik === false ? "Surprise me !" : "Normal order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
