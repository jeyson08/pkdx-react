import React from "react";
import BannerContainer from "./BannerContainer.js";

const Header = () => {
  return (
    <div className="header-container">
      <div className="animation"></div>
      <header>
        <h1>Pokédex</h1>
      </header>
      <BannerContainer />
    </div>
  );
};

export default Header;
