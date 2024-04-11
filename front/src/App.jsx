import { useEffect, useState } from "react";
import "./App.css";
import AnimalsList from "./Components/AnimalsList";
import CreateAnimal from "./Components/CreateAnimal";
import axios from "axios";
import Modal from "./Components/Modal";
import SortingComponent from "./Components/SortingComponenet";

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

    // fetch("http://localhost:3003/zoo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(create),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Network response failed");
    //     }
    //     return res.json();
    //   })
    //   .then(() => setUpdateTime(Date.now()))
    //   .catch((error) => console.log(error));
  }, [create]);

  // __________________________________________________________________________
  // GET
  useEffect(() => {
    axios
      .get("http://localhost:3000/zoo/all")
      .then((res) => setAnimalList(res.data));
    // .then(
    //   (res) => setAnimalList(res.data.sort((a, b) => a.weight - b.weight))
    // setAnimalList(res.data.sort((a, b) => (a.type > b.type ? 1 : -1)))
    // );
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
    const copy = [...animalList];

    switch (value) {
      case "a-z":
        setAnimalList(copy.sort((a, b) => a.weight - b.weight));
        break;
      case "z-a":
        setAnimalList(copy.sort((a, b) => b.weight - a.weight));
        break;
      case "name_a-z":
        setAnimalList((animals) => {
          animals.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          return [...animals];
        });
        break;
      case "name_z-a":
        setAnimalList((animals) => {
          animals.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
          return [...animals];
        });
        break;
      default:
    }
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
    </div>
  );
}

export default App;
