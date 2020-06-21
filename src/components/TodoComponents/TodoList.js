import React from 'react';
import Todo from './Todo';

const TodoList = ( {todos, toggleToDo}) => {
    console.log("TodoList: ", todos, toggleToDo)
    return (
        <div className="todo-list">
            {todos.map(todo => ( // error: cannot read property 'name' of undefined on line 9
                <Todo toggleToDo={toggleToDo} name={todo.name}> 
                    {console.log("Inside Map: ", todo, todo.name)}
                </Todo>
            ))}
        </div>
    )  
}

export default TodoList;