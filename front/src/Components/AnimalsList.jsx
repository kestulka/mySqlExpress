import React from "react";
import Animal from "./Animal";
import { Box, Center } from "@chakra-ui/react";

const AnimalsList = ({ animalList, handleDelete, setShow }) => {
  // console.log(animalList);
  return (
    <Box>
      <Center>
        {animalList.length > 0 &&
          animalList.map((animal) => (
            <Animal
              key={animal.id}
              animal={animal}
              handleDelete={handleDelete}
              setShow={setShow}
            />
          ))}
      </Center>
    </Box>
  );
};

export default AnimalsList;
