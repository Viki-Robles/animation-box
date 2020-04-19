import React, { Component } from "react";
import "./Todos.css";
import shortid from "shortid";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmnit = event => {
    event.preventDefault();
    //in order to submit the form we need to
    //be able to create a new Todo
    //and pass it to the todo list on the App.js
    this.props.onSubmit({
        id:shortid.generate(),
        text: this.state.text,
        complete:false,
    });//this onSubmit is the addItem from the APP.js
    this.setState({text:""})
  };

  render() {
    return (
        <>
      <form onSubmit={this.handleSubmnit}>
        <input
          name="text"
          type="text"
          placeholder="What needs to be done"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmnit}>Add</button>

      </form>
</>
    );
  }
}
