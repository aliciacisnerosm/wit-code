import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/home/Home";
import WitCode from "./components/WitCode";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Login from "./components/auth/Login";
import EvidenceForm from "./components/Evidence-form";
import AttendanceForm from "./components/Attendance-form";
import EvidenceList from "./components/acceptance/containers/Evidence-list";
import AttendanceList from "./components/acceptance/containers/Attendance-list";

import "./App.css";

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
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/evidence-form"
              component={EvidenceForm}
            />
            <Route
              exact
              path="/attendance-form"
              component={AttendanceForm}
            />
            <Route
              exact
              path="/evidence-list"
              component={EvidenceList}
            />
            <Route
              exact
              path="/attendance-list"
              component={AttendanceList}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
