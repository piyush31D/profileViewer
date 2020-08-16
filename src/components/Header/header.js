import React from "react";
import "../../containers/App";

import { Link } from "react-router-dom";
const header = (props) => {
  // let signIn = "";
  // const loadLogin = () => {
  //   console.log("Login Clicked");
  //   signIn = <Login uname={props.uname} />;
  // };

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

        {/* <li>
          <input type="button" value="Overview" onClick={props.ovrview} />
          <input type="button" value="Education" />
          <input type="button" value="Carrier" />
        </li> */}
      </div>
      {/* <div className="UserClass">
        {props.name !== "" ? (
          <UserInfo name={props.name} />
        ) : (
          <p>
            Please
            <input
              type="button"
              value="Login"
              onClick={() => {
                loadLogin();
              }}
            />
            /SignUp to view profile.
          </p>
        )}
      </div> */}
      {/* <div>
        <Login uname={props.uname} />
      </div> */}
    </div>
  );
};

export default header;
