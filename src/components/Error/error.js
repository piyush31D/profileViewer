import React from "react";

const LoginError = (props) => {
  if (props.fname === "") {
    return null;
  } else {
    return <p> {props.fname} is Invalid. </p>;
  }
};
export default LoginError;
