import React, { Component } from "react";
import "./UserInfo.css";
import { useSelector } from "react-redux";
const UserInfo = () => {
  const userName = useSelector((state) => state.loggedUserName);
  console.log("userinfo" + userName);
  return (
    <div className="UserClass">
      Welcome {userName} <br></br>
      <ul>
        <li> User Name:</li>
        <li> User Email: </li>
        <li> Last Login:</li>
      </ul>
      <input type="button" value="Logout" />
    </div>
  );
};

export default UserInfo;
