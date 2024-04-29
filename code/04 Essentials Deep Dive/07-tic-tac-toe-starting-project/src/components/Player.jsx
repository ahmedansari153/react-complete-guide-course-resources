import React from 'react';

export default function Player({initialName, symbol, buttonType}) {
    const [isEditing, setEditing] = React.useState(false);
    const [name, setName] = React.useState(initialName);
    function edit(){
        setEditing((editing) => !editing);
    }
    function updateName(e) {
        setName(() => e.target.value);
    }

    return(
        <li>
            <span className="player">
            {!isEditing ? 
                (<span className="player-name">{name}</span>) :
                (<input type="text" onChange={updateName}/>)
            }
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={edit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}