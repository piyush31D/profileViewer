import React, { Component } from "react";
import "./UserInfo.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Welcome {this.props.name} <br></br>
        <input type="button" value="Logout" />
      </div>
    );
  }
}
export default UserInfo;
