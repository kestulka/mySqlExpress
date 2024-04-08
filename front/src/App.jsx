import "./App.css";
import CreateAnimal from "./Components/CreateAnimal";
import AnimalsList from "./Components/AnimalsList";

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
  return (
    <>
      <CreateAnimal />
      <AnimalsList animalList={animalList} />
    </>
  );
}

export default App;
