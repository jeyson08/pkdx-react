import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [pkmData, setPkmData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPkmData(res.data.results));
  }, []);

  return (
    <div className="app-container">
      <Table pkmData={pkmData} />
    </div>
  );
}

export default App;
