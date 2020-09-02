import React from "react";
import "../../containers/App";
import "./UserInfo.css";
import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <div>
      <div className="App-header">
        <h1>PROFILE VIEWER</h1>
        <ul className="nav-links">
          <Link to="/SignUp">
            <li> SignUp</li>
          </Link>
          <Link to="/Login">
            <li> Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default header;
