import React from 'react';
import './App.css';
import Todos from './Todos/Todos';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
