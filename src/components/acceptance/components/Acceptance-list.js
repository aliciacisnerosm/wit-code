import React, { Component } from "react";
import {
  Form,
  ListGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "./Acceptance-list.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
class AcceptanceList extends Component {
  constructor(props) {
    super(props);
    this.onChangeNameFilter = this.onChangeNameFilter.bind(this);
    this.onChangeDateFilter = this.onChangeDateFilter.bind(this);

    this.state = {
      name: "",
      date: new Date(),
      list: props.list ? props.list : [],
    };
  }

  onChangeNameFilter(e) {
    this.setState({ name: e.target.value });
  }

  onChangeDateFilter(e) {
    this.setState({ date: e });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      name: "",
      date: "",
    });
  }

  render() {
    return (
      <div className="row m-0 mt-4 mx-5">
        <div className="col">
          <div className="row">
            <div className="col-6">
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <div className="row">
                    <div className="col-3">
                      <Form.Label>Nombre</Form.Label>
                    </div>
                    <div className="col-9">
                      <Form.Control as="select" custom>
                        {this.state.list.map((item, index) => (
                          <option key={index + "-" + item.name}>
                            {item.name}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3">
                  <Form.Label>Fecha</Form.Label>
                </div>
                <div className="col-9">
                  <DatePicker
                    className="d-block w-100"
                    selected={this.state.date}
                    onChange={this.onChangeDateFilter}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 mt-2">
            <div className="col-3">
              <h6>Nombre</h6>
            </div>
            <div className="col-5">
              <h6>Link</h6>
            </div>
            <div className="col-2">
              <h6>Fecha</h6>
            </div>
            <div className="col-2">
              <h6>Aceptado</h6>
            </div>
          </div>
          <ListGroup>
            {this.state.list.map((item, index) => (
              <ListGroup.Item
                key={index + "-" + item.date.toLocaleDateString("en-GB")}
                className="p-0 py-3"
              >
                <div className="row m-0">
                  <div className="col-3">
                    <span>{item.name}</span>
                  </div>
                  <div className="col-5">
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.link}
                    </a>
                  </div>
                  <div className="col-2">
                    <span>{item.date.toLocaleDateString("en-GB")}</span>
                  </div>
                  <div className="col-2">
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      defaultValue={item.accepted}
                    >
                      <ToggleButton value={0}>Si</ToggleButton>
                      <ToggleButton value={1}>No</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default AcceptanceList;
