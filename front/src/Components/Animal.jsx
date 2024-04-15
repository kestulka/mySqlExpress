import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";

const Animal = ({ animal, handleDelete, setShow }) => {
  const { id, animal_name, animal_type, animal_weight, live_in_zoo } = animal;

  return (
    <Box border="2px solid white" m={8} justifyContent="center">
      <List p={0} m={2}>
        <ListItem>
          <Text>
            id: <b>{id}</b>
          </Text>
          <Text>
            name: <b>{animal_name}</b>
          </Text>
          <Text>
            type: <b>{animal_type}</b>
          </Text>
          <Text>
            weight: <b>{animal_weight}</b>
          </Text>
          <Text>
            is in zoo?: <b>{live_in_zoo}</b>
          </Text>
          <Box>
            <Button onClick={() => setShow(id)} mr={8}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Animal;
