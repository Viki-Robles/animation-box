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
  state = {
    todos: []
  };

  addItems = todo => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <Todos onSubmit={this.addItems}/>
        {this.state.todos.map(todo=><div key={todo.id}>{todo.text}</div>)}
        <Footer />
      </div>
    );
  }
}

export default App;
