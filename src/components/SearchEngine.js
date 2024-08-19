import React, { useEffect } from "react";

const SearchEngine = ({ searchClik, setSearchClik }) => {
  useEffect(() => {
    console.log(searchClik);
  }, [searchClik]);
  return (
    <div className="search-engine">
      <div className="search-options">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="ex: Charizard, 6, Pikachu, ..."
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
