import React from 'react';

class TodoListItem extends React.Component{

  handleRemove(event){
    this.props.removeHandler(event);
  }

  handleResubmit(event){
    this.props.submitHandler(event);
  }

  render() {
    const { itemStyle } = styles;
    const { title, error, id } = this.props.todo;
    return (
      <p style={itemStyle} >
        <span className="title" id={id} onClick={this.handleRemove.bind(this)} >{title}</span>
        {
          error ? <span title="Click to resend again!!!" onClick={this.handleResubmit.bind(this)}>   &#10006;</span> : null
        }
      </p>
    );
  }
}

var styles = {
  itemStyle: {
    padding: '5px',
    borderBottom: '1px solid #A9A9A9'
  }
}

export default TodoListItem;
