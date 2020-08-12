import React from "react";
import "../../containers/App";
import UserInfo from "../Header/userInfo";
import Login from "../login/login";
const header = (props) => {
  let signIn = "";
  const loadLogin = () => {
    console.log("Login Clicked");
    signIn = <Login uname={props.uname} />;
  };

  return (
    <div>
      <div className="App-header">
        <h1>PROFILE VIEWER</h1>

        <div>
          <input type="button" value="Overview" onClick={props.ovrview} />
          <input type="button" value="Education" />
          <input type="button" value="Carrier" />
        </div>
      </div>
      <div className="UserClass">
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
      </div>
      <div>
        <Login uname={props.uname} />
      </div>
    </div>
  );
};

export default header;
