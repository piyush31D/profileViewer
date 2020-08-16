import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header/header";
import Overview from "../components/overviewProfile/overview";
import Login from "../components/login/login";
import SignUp from "../components/SignUp/signUp";
import UserInfo from "../components/Header/userInfo";
import Nav from "../components/userNavigation/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loadOsvrview: false,
    };
  }
  handleUserlogin = (msg) => {
    this.setState({ username: msg.username, password: msg.password });
    console.log(this.state.username);
  };
  handleOverView = (e) => {
    console.log("App" + e.value);
    this.setState({ loadOsvrview: true });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/* <Header
            name={this.state.username}
            uname={this.handleUserlogin}
            ovrview={this.handleOverView}
          />
          {<Login uname={this.handleUserlogin} />
          {this.state.loadOsvrview ? <Overview /> : null}  */}
        </div>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/user" component={UserInfo} />
          <Route path="/nav" component={Nav} />
        </Switch>
      </Router>
    );
  }
}
export default App;
