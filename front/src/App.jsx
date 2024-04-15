import { useEffect, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Link, Box, Icon, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import AnimalsList from "./Components/AnimalsList";
import CreateAnimal from "./Components/CreateAnimal";
import axios from "axios";
import Modal from "./Components/Modal";
import SortingComponent from "./Components/SortingComponenet";
import { sortAnimals } from "./Functions/sorting";

function App() {
  const [create, setCreate] = useState(null);
  const [updateTime, setUpdateTime] = useState(Date.now());
  const [animalList, setAnimalList] = useState([]);
  const [show, setShow] = useState(0);
  const [edit, setEdit] = useState(null);

  // DELETE
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/zoo/${id}`)
      .then((res) => setUpdateTime(Date.now()));
  };

  // __________________________________________________________________________

  const showData = () => {
    return animalList.find((animal) => animal.id === show);
  };

  // __________________________________________________________________________
  // POST
  useEffect(() => {
    if (create === null) {
      return;
    }

    axios
      .post("http://localhost:3000/zoo", create)
      .then((res) => setUpdateTime(Date.now()));
  }, [create]);

  // __________________________________________________________________________
  // GET
  useEffect(() => {
    axios
      .get("http://localhost:3000/zoo/all")
      .then((res) => setAnimalList(res.data));
  }, [updateTime]);

  // __________________________________________________________________________
  // EDIT

  useEffect(() => {
    if (edit === null) {
      return;
    }

    axios
      .put(`http://localhost:3000/zoo/${edit.id}`, edit)
      .then((res) => setUpdateTime(Date.now()));
  }, [edit]);

  // __________________________________________________________________________

  const sortHandler = (value) => {
    setAnimalList(sortAnimals(animalList, value));
  };

  return (
    <div className="App">
      <SortingComponent sortHandler={sortHandler} />
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList
        animalList={animalList}
        handleDelete={handleDelete}
        setShow={setShow}
      />
      <Modal
        id={show}
        setShow={setShow}
        showData={showData}
        setEdit={setEdit}
      />

      <Box mt={80}>
        <Flex alignItems="center">
          <Icon as={FaGithub} boxSize={28} mr={8} />
          <Link
            color="teal.500"
            href="https://github.com/kestulka/mySqlExpress"
            textDecoration="underline"
          >
            Project Repository
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

export default App;
