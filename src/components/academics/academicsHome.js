import { Input, Space } from "antd";
import React from "react";
import Academics from "./academics";
class AcademicsHome extends React.Component {
  constructor() {
    super();
    this.state = {
      detailsModified: false,
      academics: [],
      details: [
        {
          board: "",
          percentage: "",
        },
      ],
    };
  }
  onInputChangeHandler = (event) => {
    if (event.target.value !== Space) {
      this.setState({
        academics: [...this.state.academics, { type: event.target.value }],
      });
    }
  };
  render() {
    const boardTitle = ["HSC", "SSC", "Graduation"];
    const boardListSelector = boardTitle.map((i, index) => {
      return (
        <option key={index} value={i}>
          {i}
        </option>
      );
    });

    const changeHandler = (event) => {
      // if (event.target.name == "board") {
      //   this.setState({
      //     details: [...this.state.details, { board: event.target.value }],
      //   });
      // }
      // if (event.target.name == "percent") {
      //   this.setState({
      //     details: [
      //       ...this.state.details,
      //       { percentage: event.target.value, board: this.state.details.board },
      //     ],
      //   });
      // }
      this.setState({
        ...this.state.details,
        [event.target.name]: [event.target.value],
      });
    };
    const submitHandler = () => {
      console.log("Form Dat", this.state.details);
      this.setState({ detailsModified: true });
    };
    console.log("Details", this.state.details);
    return (
      <div>
        <h3> Please select academics</h3>
        <div>
          <select
            name="boardSelector"
            onChange={(e) => this.onInputChangeHandler(e)}
          >
            <option value="space"></option>
            {boardListSelector}
          </select>
        </div>
        <form name="academicForm">
          <Academics
            academicItems={this.state.academics}
            changeHandler={changeHandler}
            details={this.state.details}
          />
          {this.state.academics.length > 0 ? (
            <input
              type="button"
              value="SUBMIT"
              name="submit"
              onClick={submitHandler}
            />
          ) : null}
        </form>
        {this.state.detailsModified ? (
          <div>
            {this.state.details.map((det, index) => {
              return (
                <p key={index}>
                  You board name is {det.board} and percentage {det.percentage}
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default AcademicsHome;
