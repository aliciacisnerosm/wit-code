import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { requireLogin } from "./guards/login.guard";
import Home from "./components/home/Home";
import WitCode from "./components/WitCode";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Login from "./components/auth/Login";
import EvidenceForm from "./components/Evidence-form";
import AttendanceForm from "./components/Attendance-form";
import EvidenceList from "./components/acceptance/containers/Evidence-list";
import AttendanceList from "./components/acceptance/containers/Attendance-list";
import CreateUser from "./components/auth/CreateUser";
import Calendar from "./components/Calendar";
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
            <Route exact path="/wit-code/login" component={Login} />
            <Route exact path="/wit-code/calendar" component={Calendar} />
            <GuardProvider guards={[requireLogin]}>
              <GuardedRoute
                exact
                path="/wit-code/create-user"
                component={CreateUser}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/evidence-form"
                component={EvidenceForm}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/attendance-form"
                component={AttendanceForm}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/evidence-list"
                component={EvidenceList}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/attendance-list"
                component={AttendanceList}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/wit-code/signup"
                component={CreateUser}
                meta={{ auth: true }}
              />
            </GuardProvider>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
