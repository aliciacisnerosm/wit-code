import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./Evidence-form.css";
class EvidenceForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegistrationNumber = this.onChangeRegistrationNumber.bind(
      this
    );
    this.onChangeFile = this.onChangeFile.bind(this);

    this.state = {
      registration_number: "",
      evidence: "",
    };
  }

  onChangeRegistrationNumber(e) {
    this.setState({ registration_number: e.target.value });
  }

  onChangeFile(e) {
    console.log(e.target.value);
    this.setState({ evidence: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      registration_number: "",
      evidence: "",
    });
  }

  render() {
    return (
      <div className="evidence-form-page">
        <h2 className="mt-5">Entregar Evidencia</h2>
        <div className="evidence-form" id="evidence-form">
          <form className="form">
            <div className="row d-flex justify-content-center">
              <div className="col-6 mt-5">
                <input
                  id="registration-number"
                  type="text"
                  onChange={this.onChangeRegistrationNumber}
                  placeholder="Matricula"
                  required
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-6 mt-5">
                <Form.File
                  id="evidence-file"
                  label="Subir archivos"
                  custom
                  data-browse="Buscar archivo .pdf"
                  className="w-75"
                  accept="application/pdf"
                  onChange={this.onChangeFile}
                />
              </div>
            </div>

            <button className="submit-btn mt-5 p-3 flex-center">
              Subir Evidencia
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EvidenceForm;
