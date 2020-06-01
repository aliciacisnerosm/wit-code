import React, { Component } from 'react';
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

  handleLogin = () => {    
    const url = `https://wit-code-apis.herokuapp.com/login`;

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };

    fetch(url, settings)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responeJSON) => {
        localStorage.setItem( 'sessiontoken', responeJSON.sessiontoken );
        this.props.history.goBack();
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          errorMessage : err.message
        })
      });
  };

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.handleLogin();

    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="login-page">
        <h2 className="mt-5">Iniciar sesión</h2>
        <div className="user-form" id="login-user-form">
          <form onSubmit={this.onSubmit} className="login-form">
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
