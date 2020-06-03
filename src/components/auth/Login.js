import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('https://wit-code-apis.herokuapp.com/login', user)
      .then((res) => {

        localStorage.setItem('sessiontoken', res.data.sessiontoken);

        localStorage.setItem('user', JSON.stringify(res.data.user));

        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
        alert('error', error);
      });

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

            <button onClick={this.onSubmit} className="login-btn">
              Iniciar Sesión
            </button>
            {/* <p>¿Aún no tienes cuenta? <Link to={'/wit-code/create-user'}>Crea un usuario aquí</Link></p> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
