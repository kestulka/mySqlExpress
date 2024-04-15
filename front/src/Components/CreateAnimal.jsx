import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Center,
} from "@chakra-ui/react";

const CreateAnimal = ({ setCreate }) => {
  const [animal_name, setName] = useState("");
  const [animal_type, setType] = useState("");
  const [animal_weight, setWeight] = useState("");
  const [live_in_zoo, setLivesInZoo] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCreate({
      animal_name,
      animal_type,
      animal_weight,
      live_in_zoo: live_in_zoo,
    });
    console.log(animal_name, animal_type, animal_weight, live_in_zoo);

    setName("");
    setType("");
    setWeight("");
    setLivesInZoo(0);
  };

  return (
    <Box>
      <Heading>Create animal record</Heading>
      <form className="animals" onSubmit={handleFormSubmit}>
        <Center>
          <FormControl>
            <FormLabel textAlign="center">Animal name:</FormLabel>
            <Input
              h="1.5rem"
              type="text"
              value={animal_name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel textAlign="center">Animal type:</FormLabel>
            <Input
              h="1.5rem"
              type="text"
              value={animal_type}
              onChange={(e) => setType(e.target.value)}
            />
            <FormLabel textAlign="center">Animal weight:</FormLabel>
            <Input
              h="1.5rem"
              type="number"
              value={animal_weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <FormLabel textAlign="center">Live in zoo?</FormLabel>
            <Input
              type="checkbox"
              checked={live_in_zoo}
              onChange={() => setLivesInZoo((doLive) => (doLive ? 0 : 1))}
              className="checkbox-custom"
            />
            <Divider></Divider>
            <Button type="submit">Create </Button>
          </FormControl>
        </Center>
      </form>
    </Box>
  );
};

export default CreateAnimal;
