import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import WitCode from './components/WitCode';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/wit-code" component={WitCode} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/wit-code/login" component={Login} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
