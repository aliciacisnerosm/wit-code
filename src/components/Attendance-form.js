import React, { Component } from "react";
import "./Attendance-form.css";
class AttendanceForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeAttendance = this.onChangeAttendance.bind(this);

    this.state = {
      attendance_link: "",
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

  sendAttendance() {
    const url = `https://wit-code-apis.herokuapp.com/entregas`; // users? evidence? attendance??
    let data = {
      registration_number : this.state.registration_number,
      link: this.state.evidence_link,
      date : new Date(),
      entrega_type: 'atendance',   
    }
    let settings = {
      method: 'POST', //también puede ser patch
      headers: {
        sessiontoken: localStorage.getItem('sessiontoken'),
      },
      body : JSON.stringify(data),
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
        this.props.history.push('/evidence-form');
      });
  }

  onChangeRegistrationNumber(e) {
    this.setState({ registration_number: e.target.value });
  }

  onChangeAttendance(e) {
    this.setState({ attendance_link: e.target.value });
  }

  onSubmit = (e) =>{
    e.preventDefault();

    this.setState({
      registration_number: "",
      attendance_link: "",
    });
  }

  render() {
    return (
      <div className="attendance-form-page">
        <h2 className="mt-5">Entregar Asistenica</h2>
        <div className="attendance-form" id="attendance-form">
          <form className="form">

            <div className="row d-flex justify-content-center">
              <div className="col-6 mt-5">
                <input
                  id="attendance-link"
                  type="text"
                  onChange={this.onChangeAttendance}
                  placeholder="Link de asistencia"
                  required
                />
              </div>
            </div>

            <button className="submit-btn mt-5 p-3 flex-center">
              Subir Asistencia
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AttendanceForm;
