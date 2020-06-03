import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import "./Evidence-form.css";
class EvidenceForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeFile = this.onChangeFile.bind(this);

    this.state = {
      evidence: "",
    };
  }

  onChangeFile(e) {
    console.log(e.target.value)
    this.setState({ evidence: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newEvidence = {
      link: this.state.evidence,
      entrega_type: "evidence",
    };

    axios
      .post("https://wit-code-apis.herokuapp.com/entregas/", newEvidence, {
        headers: { sessiontoken: localStorage.getItem("sessiontoken") },
      })
      .then((res) => {
        // alert(res.user);
        // localStorage.setItem('sessiontoken', res.data.token);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
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

            <button
              onClick={this.onSubmit}
              className="submit-btn mt-5 p-3 flex-center"
            >
              Subir Evidencia
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EvidenceForm;
