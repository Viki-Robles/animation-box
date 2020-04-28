import React, { Component } from "react";
import "./App.css";
import TodosList from "./Todos/TodosList";
import Footer from "./Footer/Footer";
import Todos from "./Todos/Todos";

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

  addTodos = todo => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        //suppose we update
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <TodosList onSubmit={this.addTodos} />
        {this.state.todos.map(todo => (
          <Todos
            key={todo.id}
            id={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
