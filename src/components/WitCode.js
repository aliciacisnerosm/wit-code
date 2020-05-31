import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Carousel from './Carousel';
import { Card, Button } from 'react-bootstrap';
import './WitCode.css';

class WitCode extends Component {
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
        <Link to={'/wit-code/login'}>
          <button className="btn-login">Iniciar sesión</button>
        </Link>
      </div>
    );
  }
}

export default WitCode;
