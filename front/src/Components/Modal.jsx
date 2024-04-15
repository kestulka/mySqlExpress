import React from "react";
import EditAnimal from "./EditAnimal";
import { Box, Text, Button } from "@chakra-ui/react";

const Modal = ({ id, setShow, showData, setEdit }) => {
  return id === 0 ? null : (
    <Box>
      <Box>
        <Text>
          Editing animal with id: <b>{id}</b>
        </Text>
        <Button onClick={() => setShow(0)}>X</Button>
      </Box>
      <EditAnimal setShow={setShow} showData={showData()} setEdit={setEdit} />
    </Box>
  );
};

export default Modal;
