import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header/header";
import Overview from "../components/overviewProfile/overview";
//import Login from "../components/login/login";

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
      <div className="App">
        <Header
          name={this.state.username}
          uname={this.handleUserlogin}
          ovrview={this.handleOverView}
        />
        {/* <Login uname={this.handleUserlogin} /> */}
        {this.state.loadOsvrview ? <Overview /> : null}
      </div>
    );
  }
}
export default App;
