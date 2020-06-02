import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import WitCode from './components/WitCode';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import EvidenceForm from './components/Evidence-form';
import AttendanceForm from './components/Attendance-form';
import CreateUser from './components/CreateUser';
import Calendar from './components/Calendar';
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
            <Route exact path="/wit-code/create-user" component={CreateUser} />
            <Route exact path="/wit-code/calendar" component={Calendar} />
            <Route
              exact
              path="/wit-code/evidence-form"
              component={EvidenceForm}
            />
            <Route
              exact
              path="/wit-code/attendance-form"
              component={AttendanceForm}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
