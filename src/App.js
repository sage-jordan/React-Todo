import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    name: "Homework",
    id: 1234,
    completed: false
  },
  {
    name: "Chores",
    id: 1235,
    completed: false
  }
]

// TodoForm is working
// TodoList has an error within the map function 

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      todos
    };
  }
  
  addItem = (e) => {
    const newItem = {
      name: e,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  toggleToDo = todo => {
    console.log("index.js: App: toggleItem", todo);
    const item = this.state.todos.find(i => {
      if (i.name === todo){
        return true;
      } else {
        return false;
      }
    })
    this.setState({
      todos: this.state.todos.map(todo => {
        if(item.name === todo) {
          return { ...item, completed: !item.completed};
        }
      })
    })
  };
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleToDo={this.toggleToDo}/>
        <TodoForm addItem={this.addItem} clearFunction={this.clearFunction} />
      </div>
    );
  }
}

export default App;
