import React from "react";
import Animal from "./Animal";
import { Box } from "@chakra-ui/react";

const AnimalsList = ({ animalList, handleDelete, setShow }) => {
  // console.log(animalList);
  return (
    <Box>
      {animalList.length > 0 &&
        animalList.map((animal) => (
          <Animal
            key={animal.id}
            animal={animal}
            handleDelete={handleDelete}
            setShow={setShow}
          />
        ))}
    </Box>
  );
};

export default AnimalsList;
