import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos/Todos";
import Footer from "./Footer/Footer";

// STEPS FOR TODO

//add Todo
// display Todo
// cross off todo
//show number of active todos
//filter all/active/complete
//delete todo
//delete all complete
//button to toggle all on/off

class App extends Component {
  state = { todos: [] };

  addItems = props => {
    const newTodos = [props,...this.state.todos];
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <Todos onSubmit={this.addItems}/>
        <Footer />
      </div>
    );
  }
}

export default App;
