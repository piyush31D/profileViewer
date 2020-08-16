import React from "react";
import SignUp from "../SignUp/signUp";
import { Link } from "react-router-dom";
const nav = (props) => {
  return (
    <div>
      <ul className="user-nav">
        <Link to="/SignUp">
          <li> Overview</li>
        </Link>
        <Link to="/SignUp">
          <li> Academics</li>
        </Link>
        <Link to="/SignUp">
          <li> Carrier</li>
        </Link>
      </ul>
    </div>
  );
};
export default nav;
