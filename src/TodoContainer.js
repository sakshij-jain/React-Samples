import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoContainer extends React.Component{

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/Todos')
    .then(response => {
      this.setState({todos: response.data})
    })
    .catch(
      error => console.log(error)
    );
  }

  removeHandler(event){
    axios.delete('http://localhost:3000/api/Todos/' + event.target.id)
    .then()
    .catch(
      error => console.log(error)
    );
    var newTodos = this.state.todos.filter(todo =>
       todo.id != event.target.id
    )
    this.setState({todos: newTodos});
  }

  submitHandler(data){
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/Todos',
      data: data
    }).then(
        res => res
      )
      .catch(
        error => {
          var addProp = {error: "server error"};
          Object.assign(data, addProp);
          this.setState(data);
          console.log(error);
      });
    var state = Object.assign({}, this.state);
    state.todos.push(data);
    this.setState(state);
  }

  render() {

    const { containerStyle } = styles;

    return (
      <div style={containerStyle}>
        <h1>TO-DOs</h1>
        <TodoList todos={this.state.todos} removeHandler={this.removeHandler.bind(this)} submitHandler={this.submitHandler.bind(this) }/>
        <TodoForm submitHandler={this.submitHandler.bind(this)} />
      </div>
    );
  }

}

var styles = {
  containerStyle: {
    padding: '20px',
    backgroundColor: '#F6F9FA'
  }
}

export default TodoContainer;
