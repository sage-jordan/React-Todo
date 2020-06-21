import React from 'react';

const Todo = props => {
    console.log("Todo: ", props);
    return (
        <div
            className={`Item${props.completed ? true : false }`}
            onClick={ () => props.toggleToDo(props.name)}
        >
            <p>{props.name}</p>
        </div>
    )
}
export default Todo;