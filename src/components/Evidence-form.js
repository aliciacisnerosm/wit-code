import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./Evidence-form.css";
class EvidenceForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeFile = this.onChangeFile.bind(this);

    this.state = {
      evidence: "",
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
          user_type: responseJSON.usertype
        });

      })
      .catch(err => {
        console.log(err.message);
        this.props.history.push('/login');
      });
  }

  sendEvidence() {
    const url = `https://wit-code-apis.herokuapp.com/`; // users? evidence? attendance??
    let data = {
      registration_number : this.state.registration_number,
      link: this.state.evidence_link,
      date : new Date(),      
    }
    let settings = {
      method: 'POST', //también puede ser patch
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
        
      })
      .catch(err => {
        console.log(err.message);
        this.props.history.push('/attendance-form');
      });
  }

  onChangeRegistrationNumber(e) {
    this.setState({ registration_number: e.target.value });
  }

  onChangeFile(e) {
    this.setState({ evidence: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    
    //this.sendEvidence

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
          <form className="form" onSubmit={this.onSubmit}>
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
