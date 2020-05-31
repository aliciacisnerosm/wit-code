import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="login-page">
        <h2>Iniciar sesión</h2>
        <div className="user-form" id="login-user-form">
          <form className="login-form">
            <input
              id="email"
              type="email"
              onChange={this.onChangeEmail}
              placeholder="Email"
              required
              className="input-login"
            />
            <br></br>
            <input
              id="password"
              type="password"
              onChange={this.onChangePassword}
              placeholder="Contraseña"
              required
              className="input-login"
            />
            <br></br>

            <button className="login-btn">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
