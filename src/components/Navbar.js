import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

class NavbarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      password: '',
    };
  }
  componentWillMount(){
    this.setState({})
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://wit-code.s3.amazonaws.com/logo-wit.png"
            alt="logo wit"
            style={{ width: '90px' }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex">
            <Link key={1} as={Link} className={'navbar-btn'} to={'/'}>
              Home
            </Link>
            <Link key={2} as={Link} className={'navbar-btn'} to={'/about-us'}>
              About us
            </Link>
            <Link key={3} as={Link} className={'navbar-btn'} to={'/wit-code'}>
              Wit Code
            </Link>
            <Link
              key={4}
              as={Link}
              className={'navbar-btn-big'}
              to={'/wit-code/evidence-form'}
            >
              Subir Evidencia
            </Link>
            <Link
              key={5}
              as={Link}
              className={'navbar-btn-big'}
              to={'/wit-code/attendance-form'}
            >
              Subir Asistencia
            </Link>
            <Link
              key={6}
              as={Link}
              className={'navbar-btn-big'}
              to={'/wit-code/calendar'}
            >
              Calendario
            </Link>
            <Link
              key={7}
              as={Link}
              className={'navbar-btn ml-auto'}
              to={'/wit-code/login'}
            >
              Iniciar Sesion
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarApp;
