import "./App.css";
import CreateAnimal from "./Components/CreateAnimal";
import AnimalsList from "./Components/AnimalsList";
import Modal from "./Components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [create, setCreate] = useState(null);
  const [updateTime, setUpdateTime] = useState(Date.now());
  const [animalList, setAnimalList] = useState([]);
  const [show, setShow] = useState(0);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/zoo/${id}`)
      .then((response) => setUpdateTime(Date.now()));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/zoo/all")
      .then((response) => setAnimalList(response.data));
  }, [updateTime]);

  useEffect(() => {
    if (create === null) {
      return;
    }
    axios
      .post("http://localhost:3000/zoo", create)
      .then((response) => setUpdateTime(Date.now()));
  }, [create]);

  return (
    <>
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList
        animalList={animalList}
        handleDelete={handleDelete}
        setShow={setShow}
      />
      <Modal id={show} setShow={setShow} />
    </>
  );
}

export default App;
