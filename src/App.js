import React, { Component } from "react";
import "./App.css";
import TodosList from "./Todos/TodosList";
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
  state = {
    todos: []
  };

  addTodos = (todo) => {
    const newTodos = [todo, ...this.state.todos]
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <TodosList onSubmit={this.addTodos}/>
        <Footer />
      </div>
    );
  }
}

export default App;
