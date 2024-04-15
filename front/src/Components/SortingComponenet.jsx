import React, { useState } from "react";
import { Box, Heading, Select } from "@chakra-ui/react";

const SortingComponenet = ({ sortHandler }) => {
  const [select, setSelect] = useState("a-z");
  return (
    <Box>
      <Heading>Sort by:</Heading>
      <Select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
          sortHandler(e.target.value);
        }}
        icon={<></>} // kad nebutu extra icono desinej
      >
        <option value="weight a - z">A-Z weight</option>
        <option value="weight z - a">Z-A weight</option>
        <option value="name a - z">A-Z name</option>
        <option value="name z - a">Z-A name</option>
      </Select>
    </Box>
  );
};

export default SortingComponenet;
