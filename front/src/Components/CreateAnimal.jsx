import React, { useState } from "react";

const CreateAnimal = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [livesInZoo, setLivesInZoo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setType("");
    setWeight("");
    setLivesInZoo("");
  };

  return (
    <div>
      <h1>Create animal record</h1>
      <form>
        <label>Animal name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Animal type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Animal weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label>Live in zoo</label>
        <input
          type="checkbox"
          checked={livesInZoo}
          onChange={() => setLivesInZoo((doLive) => (doLive ? 0 : 1))}
        />

        <button onChange={handleFormSubmit}>Create </button>
      </form>
    </div>
  );
};

export default CreateAnimal;
