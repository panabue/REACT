import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClickEdit() {
    setIsEditing((prevValue) => !prevValue);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={name}
            onChange={handleChangeName}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
