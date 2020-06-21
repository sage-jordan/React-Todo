import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            todo: ''
        };
    };

    handleChange = (event) => {
        this.setState({todo: event.target.value});
        console.log(this.state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.todo);
        console.log(this.state);
    };

    clearFunction = () => {
        this.setState({todo: ''});
        console.log(this.state);
    };

    render () {
        return (
            <div className="todo-form">
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                <button className="clear-btn" onClick={this.clearFunction}>Clear</button>
            </div>
        )
    }
}
export default TodoForm;