import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const EditAnimal = ({ setShow, showData, setEdit }) => {
  const [animal_name, setName] = useState("");
  const [animal_type, setType] = useState("");
  const [animal_weight, setWeight] = useState("");
  const [live_in_zoo, setLivesInZoo] = useState(0);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setEdit({
      animal_name,
      animal_type,
      animal_weight,
      live_in_zoo,
      id: showData.id,
    });

    console.log(
      animal_name,
      animal_type,
      animal_weight,
      live_in_zoo,
      showData.id,
    );

    setName("");
    setType("");
    setWeight("");
    setLivesInZoo(0);
    setShow(0);
  };

  useEffect(() => {
    setName(showData.name);
    setType(showData.type);
    setWeight(showData.weight);
    setLivesInZoo(showData.liveInZoo);
  }, [showData]);

  return (
    <Box>
      <h1>Edit animal record</h1>

      <form onSubmit={handleSubmitForm}>
        <FormControl>
          <FormLabel>Animal name</FormLabel>
          <Input
            type="text"
            value={animal_name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Animal type</FormLabel>
          <Input
            type="text"
            value={animal_type}
            onChange={(e) => setType(e.target.value)}
          />
          <FormLabel>Animal weight</FormLabel>
          <Input
            type="number"
            value={animal_weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <FormLabel>Does animal live in zoo</FormLabel>
          <Input
            type="checkbox"
            checked={live_in_zoo}
            onChange={() => setLivesInZoo((doLive) => (doLive ? 0 : 1))}
          />
        </FormControl>
        <Button type="submit">create</Button>
      </form>
    </Box>
  );
};

export default EditAnimal;
