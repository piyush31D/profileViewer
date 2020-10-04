import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header/header";
import Login from "../components/login/login";
import SignUp from "../components/SignUp/signUp";
import UserInfo from "../components/Header/userInfo";
import Overview from "../components/overviewProfile/overview";
import Carrier from "../components/carrierProfile/carrier";
import AcademicsHome from "../components/academics/academicsHome";
import Nav from "../components/userNavigation/nav";
import { Home } from "../components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Layout } from "antd";
import { useSelector } from "react-redux";
//import CenteredGrid from "../components/testing/grid";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLogged);
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <CenteredGrid /> */}
        {isLoggedIn ? <UserInfo /> : null}
        {isLoggedIn ? <Nav /> : null}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/user" component={UserInfo} />
          <Route path="/nav" component={Nav} />
          <Route path="/Overview" component={Overview} />
          <Route path="/carrier" component={Carrier} />
          <Route path="/academics" component={AcademicsHome} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
