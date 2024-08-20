import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchEngine = ({
  searchClik,
  setSearchClik,
  search,
  setSearch,
  inputValue,
  setInputValue,
}) => {
  useEffect(() => {
    console.log(searchClik);
  }, [searchClik]);

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
