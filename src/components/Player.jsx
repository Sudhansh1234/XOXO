import { useState } from "react";


export default function Player({ name, symbol, isActive }) {
    const [currentName, setcurrentName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    function EditingOrNot() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setcurrentName(event.target.value)

    }
    let PlayerName = <span className="player-name">{currentName}</span>
    let EditBtn = <button onClick={EditingOrNot}>Edit</button>
    if (isEditing) {
        PlayerName = <input type="text" required value={currentName} onChange={handleChange} />;
        EditBtn = <button onClick={EditingOrNot}>Save</button>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {PlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            {EditBtn}
        </li>
    )
}