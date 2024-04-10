import React from "react";
import Animal from "./Animal";

const EditAnimal = ({ animal }) => {
  return (
    <div>
      <Animal
        id={animal.id}
        name={animal.name}
        type={animal.weight}
        weight={animal.weight}
        inZoo={animal.liveInZoo}
      />
    </div>
  );
};

export default EditAnimal;
