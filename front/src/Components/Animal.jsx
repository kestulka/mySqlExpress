import React from "react";

const Animal = ({ animal, handleDelete, setShow }) => {
  const { id, name, type, weight, liveInZoo } = animal;

  return (
    <li>
      <span>
        id: <b>{id}</b>
      </span>
      <span>
        name: <b>{name}</b>
      </span>
      <span>
        type: <b>{type}</b>
      </span>
      <span>
        weight: <b>{weight}</b>
      </span>
      <span>
        is in zoo?: <b>{liveInZoo}</b> (0 - false / 1 - true)
      </span>
      <div>
        <button onClick={() => setShow(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </li>
  );
};

export default Animal;
