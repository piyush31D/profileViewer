import React from "react";
import { Link } from "react-router-dom";
const nav = (props) => {
  return (
    <div className="user-nav">
      <ul>
        <li>
          <Link to="/Overview">Overview</Link>
        </li>
        <li>
          <Link to="/carrier">Carrier</Link>
        </li>
        <li>
          <Link to="/academics">Academics</Link>
        </li>
      </ul>
    </div>
  );
};
export default nav;
