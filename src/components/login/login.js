import React from "react";
//import LoginError from "../Error/error";
import "./login.css";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (event) => {
    const checkValidUser = database.find((dt) => {
      if (dt.validUser === event.username) {
        props.uname(event);
        return true;
      } else {
        return false;
      }
    });
    console.log(checkValidUser);
    if (checkValidUser === "undefined") {
      alert("User Does not exist.");
    }
  };
  const database = [
    {
      validUser: "Ashish",
      password: "123456ak",
    },
    {
      validUser: "John",
      password: "John1234",
    },
    {
      validUser: "Guest",
      password: 12345678,
    },
  ];

  return (
    <form name="form-login" onSubmit={handleSubmit(onSubmit)} className="Login">
      <p> Login</p>
      <b>User ID</b>
      <div className="input">
        <input
          type="text"
          placeholder="User Name"
          name="username"
          ref={register({ required: true, maxLength: 10, minLength: 4 })}
        />
      </div>
      {errors.username && errors.username.type === "minLength" && (
        <p>Minimum Length of 8 is required</p>
      )}
      {errors.username && errors.username.type === "required" && (
        <span role="alert"> User name is required</span>
      )}
      {errors.username && errors.username.type === "maxLength" && (
        <p>Can not be larger than 10.</p>
      )}

      <b>Password</b>

      <div className="input">
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: true,
            maxLength: 8,
            minLength: 5,
            pattern: "[A-Za-z]",
          })}
        />
      </div>
      {errors.password && errors.password.type === "minLength" && (
        <p>Minimum Length of 8 is required</p>
      )}
      {errors.password && errors.password.type === "required" && (
        <span role="alert">Password is required</span>
      )}

      <div className="button">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default Login;
