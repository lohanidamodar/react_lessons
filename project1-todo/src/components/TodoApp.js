import React, { Component } from 'react';
import './TodoApp.css';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './Navbar';

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default TodoApp;
