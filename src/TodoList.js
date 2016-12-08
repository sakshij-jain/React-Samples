import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component{

  render() {

    var todoItem = () => this.props.todos.map((todo, index) => {
      return <TodoListItem key={index} todo={todo} removeHandler={this.props.removeHandler} submitHandler={this.props.submitHandler} />;
    });

    return (
      <div>
        { todoItem() }
      </div>
    );
  }
}

export default TodoList;
