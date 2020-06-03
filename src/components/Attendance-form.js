import React, { Component } from "react";
import axios from "axios";
import "./Attendance-form.css";
class AttendanceForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeAttendance = this.onChangeAttendance.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      attendance_link: "",
    };
  }

  onChangeAttendance(e) {
    console.log(e.target.value);
    this.setState({ attendance_link: e.target.value });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();

    const newAttendance = {
      link: this.state.attendance_link,
      entrega_type: "attendance",
    };

    axios
      .post("https://wit-code-apis.herokuapp.com/entregas/", newAttendance, {
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

            <button
              onClick={this.onSubmit}
              className="submit-btn mt-5 p-3 flex-center"
            >
              Subir Asistencia
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AttendanceForm;
