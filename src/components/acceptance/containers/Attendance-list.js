import React from "react";
import AcceptanceList from "../components/Acceptance-list";
import axios from "axios";

export default class AttendanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://wit-code-apis.herokuapp.com/entregas/attendance", {
        headers: { sessiontoken: localStorage.getItem("sessiontoken") },
      })
      .then((res) => {
        // alert(res.user);
        // localStorage.setItem('sessiontoken', res.data.token);
        this.setState({ list: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <AcceptanceList key={10} list={this.state.list} />
      </div>
    );
  }
}
