import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "./components/CardContainer";

function App() {
  const [pkmData, setPkmData] = useState([]);
  const [loadMore, setLoadMore] = useState(16);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${loadMore}`)
      .then((res) => setPkmData(res.data.results));
  }, [loadMore]);

  return (
    <div className="app-container">
      <CardContainer pkmData={pkmData} />
      <button onClick={() => setLoadMore(loadMore + 16)}>coucou</button>
    </div>
  );
}

export default App;
