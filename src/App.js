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

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todos
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
