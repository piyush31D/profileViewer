import React, { Component } from "react";
import "./UserInfo.css";
import { useSelector } from "react-redux";
const UserInfo = () => {
  const custDetails = useSelector((state) => state.loggedUserName);

  return (
    <div className="UserClass">
      Welcome {custDetails.userId} <br></br>
      <ul>
        <li> User Name: {custDetails.userId}</li>
        <li> User Email : {custDetails.email}</li>
        <li> Last Login : {custDetails.userName}</li>
      </ul>
      <input type="button" value="Logout" />
    </div>
  );
};

export default UserInfo;
