import React from 'react';

class TextBox extends React.Component{

  handleChange(event){
    this.props.handleChange(event);
  }

  render() {
    return (
      <div>
        <input type="text" name={this.props.name} placeholder="Enter the Todo title"
          value={this.props.title} onChange={this.handleChange.bind(this)}/>
        <br />
      </div>
    );
  }
}

export default TextBox;
