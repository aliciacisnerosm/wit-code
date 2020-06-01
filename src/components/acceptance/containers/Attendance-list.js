import React from "react";
import AcceptanceList from "../components/Acceptance-list";

export default class AttendanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div>
        <AcceptanceList key={10} list={this.state.list} />
      </div>
    );
  }
}