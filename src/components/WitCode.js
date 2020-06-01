import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Carousel from './home/Carousel';
import './WitCode.css';

class WitCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status : false,
      btn_login_link : '/login',
    };

  }
  
  componentDidMount() {
    const url = `https://wit-code-apis.herokuapp.com/users/myinfo`;
    let settings = {
      method: 'GET',
      headers: {
        sessiontoken: localStorage.getItem('sessiontoken'),
      }
    };
    fetch(url, settings)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then(responseJSON => {
        this.setState({
          full_name: responseJSON.full_name,
          studentId: responseJSON.studentId,
          email: responseJSON.email,
          user_type: responseJSON.usertype,
          login_status : true,
          btn_login_link : '/evidence-form',
        });

      })
      .catch(err => {
        console.log(err.message);
        //this.props.history.push('/login');
      });
  }

  displayButtonLogin = () => {
    if(this.state.login_status){
      return "Entregar evidencias";
    }
    else{
      return "Iniciar sesión";
    }
  }

  render() {
    return (
      <div>
        <h1>WIT Code</h1>
        <Carousel></Carousel>
        <div className="info-witcode">
          <div className="obj">
            <h3>Nuestro objetivo</h3>
            <p>
              {' '}
              Construir mediante el comportamiento lógico computacional
              soluciones integras para fortalecer y hacer conciencia sobre la
              participación y el impacto de la mujer en el ámbito tecnológico en
              donde se desarrollen habilidades técnicas y principios éticos.
            </p>
          </div>
          <div className="obj">
            <h3>Tutores</h3>
            <p>
              {' '}
              Cada alumno tendrá en su responsabilidad a 2 beneficiarias y los
              coordinadores serán los encargados de supervisar y mantener el
              orden en los recursos que se necesiten durante las sesiones.
            </p>
          </div>
          <div className="obj">
            <h3>Impacto esperado</h3>
            <p>
              {' '}
              Se espera que al finalizar las beneficiarias sean capaces de
              detectar un problema dentro de su comunidad y puedan solucionarlo
              con las herramientas previamente enseñadas.
            </p>
          </div>
        </div>
        <h2>¿Quieres entregar una evidencia?</h2>
        <Link to={this.state.btn_login_link}>
          <button className="btn-login">{this.displayButtonLogin()}</button>
        </Link>
      </div>
    );
  }
}

export default WitCode;
