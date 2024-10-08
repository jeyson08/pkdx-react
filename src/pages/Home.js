import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import SearchEngine from "../components/SearchEngine";
import BannerContainer from "../components/BannerContainer.js";

function Home() {
  const [pkmData, setPkmData] = useState([]);
  const [searchClik, setSearchClik] = useState(false);
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=1302`)
      .then((res) => setPkmData(res.data.results));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <BannerContainer />
      <SearchEngine
        searchClik={searchClik}
        setSearchClik={setSearchClik}
        search={search}
        setSearch={setSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <CardContainer
        pkmData={pkmData}
        searchClik={searchClik}
        search={search}
        inputValue={inputValue}
      />
    </div>
  );
}

export default Home;
