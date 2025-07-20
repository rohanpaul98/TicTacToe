import { useState } from "react";

export default function Player({ initialName, playerSymbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    console.log(isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameChange = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameChange = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {playerNameChange}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
