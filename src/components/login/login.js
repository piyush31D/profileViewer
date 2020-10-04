import React from "react";
//import UserInfo from "../Header/userInfo";
import "./login.module.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signIn, custDeatails } from "../../actions";
import { Redirect } from "react-router-dom";
import Style from "./login.module.css";
const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  //onsubmit event handler
  const onSubmit = (event) => {
    const checkValidUser = database.find((dt) => {
      console.log(dt);
      if (dt.userId === event.username) {
        dispatch(signIn());
        // const details = JSON.stringify(dt);
        dispatch(custDeatails(dt));
      } else {
        return false;
      }
    });
    if (checkValidUser === "undefined") {
      alert("User Does not exist.");
    }
  };

  const database = [
    {
      userId: "Ashish",
      userName: "Ashish Kumar",
      email: "as@gm.com",
    },
    {
      userId: "John",
      userName: "John Elia",
      email: "John@gm.com",
    },
    {
      userId: "Guest",
      userName: "Guest User",
      email: "Guest@gm.com",
    },
  ];

  if (isLoggedIn) {
    return <Redirect to="/Home" />;
  } else {
    return (
      <form
        name="form-login"
        onSubmit={handleSubmit(onSubmit)}
        className="Login"
      >
        <p> Login</p>
        <b>User ID</b>
        <div className="input">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            ref={register({ required: true, maxLength: 10, minLength: 4 })}
            style={{ width: "auto !important" }}
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
  }
};
export default Login;
