import "./App.css";
import CreateAnimal from "./Components/CreateAnimal";
import AnimalsList from "./Components/AnimalsList";
import { useEffect, useState } from "react";
import axios from "axios";

const animalList = [
  { id: 1, name: "Liūtas", type: "Žinduolis", weight: "350", livesInZoo: 1 },
  {
    id: 2,
    name: "Begemotas",
    type: "Žinduolis",
    weight: "700",
    livesInZoo: 1,
  },
  { id: 3, name: "Žirafa", type: "Žinduolis", weight: "450", livesInZoo: 1 },
  {
    id: 4,
    name: "Megalodonas",
    type: "Žuvis",
    weight: "30000",
    livesInZoo: 0,
  },
];

function App() {
  const [create, setCreate] = useState(null);
  const [updateTime, setUpdateTime] = useState(Date.now());

  useEffect(() => {
    if (create === null) {
      return;
    }
    axios
      .post("http://localhost:3000/zoo", create)
      .then((res) => setUpdateTime(Date.now()));
  }, [create]);

  useEffect(() => {});

  return (
    <>
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList animalList={animalList} />
    </>
  );
}

export default App;
