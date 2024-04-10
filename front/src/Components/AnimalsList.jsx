import React from "react";
import Animal from "./Animal";

const AnimalsList = ({ animalList, handleDelete, setShow }) => {
  // console.log(animalList);
  return (
    <div>
      {animalList.length > 0 &&
        animalList.map((animal) => (
          <Animal
            key={animal.id}
            animal={animal}
            handleDelete={handleDelete}
            setShow={setShow}
          />
        ))}
    </div>
  );
};

export default AnimalsList;
