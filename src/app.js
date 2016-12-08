import React from 'react';
import ReactDOM from 'react-dom';

import TodoContainer from './TodoContainer';

class App extends React.Component{
  render() {
      return (
        <TodoContainer />
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
