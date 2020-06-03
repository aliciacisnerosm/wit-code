import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

class NavbarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      password: "",
      showForms: false,
      showLists: false,
      showCreateUser: false,
    };
  }
  componentWillMount() {
    let user = localStorage.getItem("user");
    let showForms = false;
    let showLists = false;
    let showCreateUser = false;

    if (user?.user_type === 1) {
      showForms = true;
    }
    if (user?.user_type >= 2) {
      showLists = true;
    }
    if (user?.user_type >= 3) {
      showCreateUser = true;
    }
    this.setState({
      user,
      showForms,
      showLists,
      showCreateUser,
    });
  }

  logout = () => {
    localStorage.clear();
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://wit-code.s3.amazonaws.com/logo-wit.png"
            alt="logo wit"
            style={{ width: "90px" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex">
            <Link key={1} as={Link} className={"navbar-btn"} to={"/"}>
              Home
            </Link>
            <Link key={2} as={Link} className={"navbar-btn"} to={"/about-us"}>
              About us
            </Link>
            <Link key={3} as={Link} className={"navbar-btn"} to={"/wit-code"}>
              Wit Code
            </Link>
            <Link
              key={4}
              as={Link}
              className={"navbar-btn-big"}
              to={"/evidence-form"}
              hidden={!this.showForms}
            >
              Subir Evidencia
            </Link>
            <Link
              key={5}
              as={Link}
              className={"navbar-btn-big"}
              to={"/attendance-form"}
              hidden={!this.state.showForms}
            >
              Subir Asistencia
            </Link>
            <Link
              key={6}
              as={Link}
              className={"navbar-btn-big"}
              to={"/evidence-list"}
              hidden={!this.state.showLists}
            >
              Lista Evidencias
            </Link>
            <Link
              key={7}
              as={Link}
              className={"navbar-btn-big"}
              to={"/attendance-list"}
              hidden={!this.state.showLists}
            >
              Lista Asistencias
            </Link>
            <Link
              key={8}
              as={Link}
              className={"navbar-btn"}
              to={"/wit-code/calendar"}
            >
              Calendario
            </Link>
            <Link
              key={9}
              as={Link}
              className={"navbar-btn ml-auto"}
              to={"/wit-code/signup"}
              hidden={!this.state.showCreateUser}
            >
              Crear usuario
            </Link>
            <Link
              key={10}
              as={Link}
              className={"navbar-btn ml-auto"}
              to={"/wit-code/login"}
              hidden={this.state.sessiontoken}
            >
              Iniciar Sesion
            </Link>
            <button
              className="navbar-btn ml-auto"
              onClick={this.logout}
              hidden={!this.state.sessiontoken}
            >
              Cerrar Sesion
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarApp;
