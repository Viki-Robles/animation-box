import React, { Component } from "react";
import "./TodosList.css";
import shortid from "shortid";

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
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
      </form>
      <button onClick={this.handleSubmnit}>Add</button>

</>
    );
  }
}
