import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.addTodo(this.state)
    this.setState({
      content:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add new Todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}
