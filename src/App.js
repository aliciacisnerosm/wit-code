import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
