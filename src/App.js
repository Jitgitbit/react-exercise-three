import React from 'react';

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
        root component
      </div>
    );
  }  
}

export default App;
