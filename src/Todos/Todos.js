import React, { Component } from "react";
import "./Todos.css";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
  }

  //1. HanldeChange function

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //2.
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="items"
            type="text"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
            value={this.state.items}
          ></input>
        </form>
        <button type="submit">Add</button>
      </>
    );
  }
}
