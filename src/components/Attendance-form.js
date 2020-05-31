import React, { Component } from "react";
import "./Attendance-form.css";
class AttendanceForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegistrationNumber = this.onChangeRegistrationNumber.bind(
      this
    );
    this.onChangeAttendance = this.onChangeAttendance.bind(this);

    this.state = {
      registration_number: "",
      attendance_link: "",
    };
  }

  onChangeRegistrationNumber(e) {
    this.setState({ registration_number: e.target.value });
  }

  onChangeAttendance(e) {
    this.setState({ attendance_link: e.target.value });
  }

  onSubmit(e) {
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
