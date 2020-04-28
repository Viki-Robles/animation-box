import React, { Component } from "react";
import "./TodosList.css";
import shortid from "shortid";

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  changeHandler = event => {
    this.setState({
      text : event.target.value
    }, console.log("hello"));
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id : shortid.generate(),
      text: this.state.text,
      complete: false
    })
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input 
          name="text"
          type="text" 
          placeholder="What should I buy?" 
          onChange={this.changeHandler}
          value={this.state.text}/>
        </form>
        <button>Add</button>
      </>
    );
  }
}
