import React from "react";
import EditAnimal from "./EditAnimal";

const Modal = ({ id, setShow, showData, setEdit }) => {
  return id === 0 ? null : (
    <div>
      <div>
        <p>
          Editing animal with id: <b>{id}</b>
        </p>
        <button onClick={() => setShow(0)}>X</button>
      </div>
      <EditAnimal setShow={setShow} showData={showData()} setEdit={setEdit} />
    </div>
  );
};

export default Modal;
