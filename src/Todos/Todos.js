import React, { Component } from "react";
import "./Todos.css";

// STEPS FOR TODO

//add Todo
// display Todo
// cross off todo
//show number of active todos
//filter all/active/complete
//delete todo
//delete all complete
//button to toggle all on/off

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
  }

  //1. HanldeChange function

  handleChange = (event)=> {
    this.setState({
      [event.target.name]:[event.target.value]
    });
  }

  render() {
    return (
      <>
        <form>
          <input
            name="items"
            type="text"
            placeholder="What needs to be done?"
            value={this.state.items}
            onChange={this.handleChange}
          ></input>
        </form>
        <button type="submit">Add</button>
      </>
    );
  }
}
