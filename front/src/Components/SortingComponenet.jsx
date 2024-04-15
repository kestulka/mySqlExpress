import React, { useState } from "react";
import { Box, Heading, Select } from "@chakra-ui/react";

const SortingComponenet = ({ sortHandler }) => {
  const [select, setSelect] = useState("Sort by name ascending");
  return (
    <Box>
      <Heading>Sort by:</Heading>
      <Select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
          sortHandler(e.target.value);
        }}
        h="2rem"
        icon={<></>} // kad nebutu extra icono desinej
      >
        <option value="Sort by weight ascending">A-Z weight</option>
        <option value="Sort by weight descending">Z-A weight</option>
        <option value="Sort by name ascending">A-Z name</option>
        <option value="Sort by name descending">Z-A name</option>
        <option value="Sort by type ascending">A-Z type</option>
        <option value="Sort by type descending">Z-A type</option>
      </Select>
    </Box>
  );
};

export default SortingComponenet;
