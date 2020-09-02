import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header/header";
import Login from "../components/login/login";
import SignUp from "../components/SignUp/signUp";
import UserInfo from "../components/Header/userInfo";
import Overview from "../components/overviewProfile/overview";
import Carrier from "../components/carrierProfile/carrier";
import academics from "../components/academics/academics";
import Nav from "../components/userNavigation/nav";
import { Home } from "../components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Layout } from "antd";
import { useSelector } from "react-redux";

const App = () => {
  //const { Header, Footer, Sider, Content } = Layout;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     password: "",
  //   };
  // }

  const isLoggedIn = useSelector((state) => state.isLogged);
  return (
    <Router>
      <div className="App">
        <Header />
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
          <Route path="/academics" component={academics} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
