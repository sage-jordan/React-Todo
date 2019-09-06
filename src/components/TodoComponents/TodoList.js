import React from 'react';
import Todo from './Todo';

const TodoList = ( {todos, toggleToDo}) => {
    console.log("TodoList: ", todos, toggleToDo)
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <Todo toggleToDo={toggleToDo} name={todo.name}>
                    {console.log("Inside Map: ", todo, todo.name)}
                </Todo>
            ))}
        </div>
    )  
}

export default TodoList;