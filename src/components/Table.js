// import axios from "axios";
// import React, { useEffect, useState } from "react";
import TableLine from "./TableLine";

const Table = ({ pkmData }) => {
  //   const [pkmTableData, setPkmTableData] = useState([]);

  //   useEffect(() => {
  //     if (pkmData) {
  //       axios.get(pkmData.url).then((res) => setPkmTableData(res.data));
  //     }
  //   }, [pkmData]);

  return (
    <div className="table-container">
      {pkmData &&
        pkmData.map((pkm, index) => <TableLine pkm={pkm} key={index} />)}
    </div>
  );
};

export default Table;
