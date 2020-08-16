import React, { Component } from "react";
import "./UserInfo.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserClass">
        Welcome {this.props.name} <br></br>
        <ul>
          <li> User Name:</li>
          <li> Last Login:</li>
        </ul>
        <input type="button" value="Logout" />
      </div>
    );
  }
}
export default UserInfo;
