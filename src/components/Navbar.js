import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavbarApp extends Component {
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
          <Nav className="mr-auto">
            <Link key={1} as={Link} className={'navbar-btn'} to={'/'}>
              Home
            </Link>
            <Link key={1} as={Link} className={'navbar-btn'} to={'/about-us'}>
              About us
            </Link>
            <Link key={1} as={Link} className={'navbar-btn'} to={'/wit-code'}>
              Wit Code
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarApp;
