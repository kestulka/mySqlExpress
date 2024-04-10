import React, { useState } from "react";

const CreateAnimal = ({ setCreate }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [livesInZoo, setLivesInZoo] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCreate({ name, type, weight, liveInZoo: livesInZoo }); // DATABASE TABLE ROW NAME: "liveInZoo"
    console.log(name, type, weight, livesInZoo);

    setName("");
    setType("");
    setWeight("");
    setLivesInZoo(0);
  };

  return (
    <div>
      <h1>Create animal record</h1>
      <form className="animals" onSubmit={handleFormSubmit}>
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

        <button type="submit">Create </button>
      </form>
    </div>
  );
};

export default CreateAnimal;
