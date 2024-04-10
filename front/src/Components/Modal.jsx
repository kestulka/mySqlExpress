import React from "react";
import EditAnimal from "./EditAnimal";

const Modal = ({ id, setShow }) => {
  return id === 0 ? null : (
    <div>
      <div>
        <p>
          Editing animal with id: <b>{id}</b>
        </p>
        <button onClick={() => setShow(0)}>X</button>
      </div>
      <EditAnimal />
    </div>
  );
};

export default Modal;
