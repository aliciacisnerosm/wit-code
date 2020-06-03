import React, { Component } from 'react';
import axios from 'axios';
import './CreateUser.css';
class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudenId = this.onChangeStudenId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      studentId: '',
      full_name: '',
      email: '',
      password: '',
      user_type: '',
      active: false,
    };
  }

  onChangeName(e) {
    this.setState({ full_name: e.target.value });
  }

  onChangeStudenId(e) {
    this.setState({ studentId: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeUserType(e) {
    this.setState({ user_type: e.target.value });
  }
  onChangeActive(e) {
    this.setState({ active: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      full_name: this.state.full_name,
      studentId: this.state.studentId,
      email: this.state.email,
      password: this.state.password,
      user_type: this.state.user_type,
      active: this.state.active,
    };

    axios
      .post('https://wit-code-apis.herokuapp.com/users/', newUser, {
        headers: { sessiontoken: localStorage.getItem('sessiontoken') },
      })
      .then((res) => {
        // alert(res.user);
        // localStorage.setItem('sessiontoken', res.data.token);
        this.props.history.push('/wit-code/');
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      studentId: '',
      full_name: '',
      email: '',
      password: '',
      user_type: '',
      active: false,
    });
  }

  render() {
    return (
      <div className="login-page">
        <h2 className="mt-5">Crear usuario</h2>
        <div className="user-form" id="login-user-form">
          <form className="login-form">
            <label htmlFor="name" className="label-form">
              Nombre Completo
            </label>
            <br></br>

            <input
              id="name"
              type="text"
              onChange={this.onChangeName}
              placeholder="Nombre completo"
              required
              className="input-login"
            />
            <br></br>
            <label htmlFor="studentid" className="label-form">
              Matricula
            </label>
            <br></br>

            <input
              id="studentid"
              type="text"
              onChange={this.onChangeStudenId}
              placeholder="A01281991"
              required
              className="input-login"
            />
            <br></br>
            <label htmlFor="email" className="label-form">
              Email
            </label>
            <br></br>

            <input
              id="email"
              type="email"
              onChange={this.onChangeEmail}
              placeholder="user@me.com"
              required
              className="input-login"
            />
            <br></br>
            <label htmlFor="password" className="label-form">
              Contraseña
            </label>
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
            <label htmlFor="user" className="label-form">
              Rol
            </label>
            <select onChange={this.onChangeUserType} id="user" defaultValue="1">
              <option value="1">Tutor</option>
              <option value="2">Coordinador</option>
              <option value="3">Admin General</option>
              <option value="4">Admin</option>
            </select>
            <br></br>

            <label htmlFor="active">¿Miembro activo de witcode?</label>
            <br />
            <input
              type="radio"
              name="type-user"
              value="true"
              onChange={this.onChangeActive}
            />
            <label htmlFor="active"> Sí</label>

            <br></br>
            <input
              type="radio"
              name="type-user"
              value="false"
              onChange={this.onChangeActive}
            />
            <label htmlFor="active"> No</label>

            <br />
            <button onClick={this.onSubmit} className="login-btn">
              Crear usuario
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUser;
