import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "./components/CardContainer";

function App() {
  const [pkmData, setPkmData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=15")
      .then((res) => setPkmData(res.data.results));
  }, []);

  return (
    <div className="app-container">
      <CardContainer pkmData={pkmData} />
    </div>
  );
}

export default App;
