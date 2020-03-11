import React from 'react';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {id:1, content: 'use HOB lotion'},
      {id:2, content: 'pyramid exercise'}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }  
}

export default App;
