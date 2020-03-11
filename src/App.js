import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {id:1, content: 'use HOB lotion'},
      {id:3, content: 'use peroxide'},
      {id:2, content: 'pyramid exercise'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id)
    const todosMinusOne = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: todosMinusOne
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo/>
      </div>
    );
  }  
}

export default App;
