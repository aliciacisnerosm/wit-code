import React from "react";
import AcceptanceList from "../components/Acceptance-list";

export default class AttendanceList extends React.Component {
  constructor(props) {
    super(props);
    //this.chargeData = this.chargeData.bind(this)
    this.state = {
      context: '',
      list: [
        {
          name: "David Martinez",
          link: "http://youtube.com",
          date: new Date(),
          accepted: 0,
        },
        {
          name: "Daniel Martinez",
          link: "http://youtube.com",
          date: new Date(),
          accepted: 1,
        },
      ],
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
        //this.chargeData();

      })
      .catch(err => {
        console.log(err.message);
        this.props.history.push('/login');
      });
  }

  getList = () =>{
    return this.state.list
  }

  render() {
    return (
      <div>
        <AcceptanceList key={10} list ={this.state.list} context={this.state.context} />
      </div>
    );
  }
}
