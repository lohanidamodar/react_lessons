import React, { Component } from 'react';
import './TodoApp.css';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const TodoApp = (props) => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter> 
    );
}

export default TodoApp;
