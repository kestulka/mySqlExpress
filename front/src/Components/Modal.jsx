import React from "react";
import EditAnimal from "./EditAnimal";
import { Box, Text, Button } from "@chakra-ui/react";

const Modal = ({ id, setShow, showData, setEdit }) => {
  return id === 0 ? null : (
    <Box boxShadow="0px 0px 10px rgba(255, 255, 255, 1)">
      <Box>
        <Button onClick={() => setShow(0)} mt={8}>
          Cancel Editing
        </Button>
      </Box>
      <EditAnimal setShow={setShow} showData={showData()} setEdit={setEdit} />
    </Box>
  );
};

export default Modal;
