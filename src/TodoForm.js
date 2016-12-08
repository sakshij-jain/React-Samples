import React from 'react';
import TextBox from './TextBox';

class TodoForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: false
    }
  }

  handleChange(event){
    var state = Object.assign({}, this.state);
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(evt){
    evt.preventDefault();
    var func = this.props.submitHandler(this.state);
    console.log(func);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <br />
        <TextBox name="title" title={this.state.title} handleChange={this.handleChange.bind(this)}/>
        <br />
        <input type="submit" value="Create ToDo "/>
      </form>
    );
  }
}

export default TodoForm;
