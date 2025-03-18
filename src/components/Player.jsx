import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value)
  }

  let playerContent = <span className="player-name">{playerName}</span>

  if (isEditing) {
    playerContent = (
      <input
        className="player-input"
        type="text"
        required
        value={playerName}
        onChange={handlePlayerNameChange}
      />
    )
  }

  return (
    <li>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
