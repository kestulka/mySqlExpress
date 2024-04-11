import React, { useState } from "react";

const SortingComponenet = ({ sortHandler }) => {
  const [select, setSelect] = useState("a-z");
  return (
    <div>
      <header style={{ backgroundColor: "purple" }}>
        <h1>Sort by:</h1>
        <select
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
            sortHandler(e.target.value);
          }}
        >
          <option value="weight a - z">A-Z weight</option>
          <option value="weight z - a">Z-A weight</option>
          <option value="name a - z">A-Z name</option>
          <option value="name z - a">Z-A name</option>
        </select>
      </header>
    </div>
  );
};

export default SortingComponenet;
