import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Preference from "./components/preference";
import OnBoarding from "./components/onboarding";
import Game from "./components/game";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currnetPage: "preference"
    };
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }

  changeCurrentPage(newPage) {
    console.log("app.js changeCurrentPage");
    this.setState({ currnetPage: newPage });
  }
  render() {
    return (
      <div className="vh-100">
        {this.state.currnetPage == "onboarding" ? (
          <OnBoarding changeCurrentPage={this.changeCurrentPage} />
        ) : null}
        {this.state.currnetPage == "preference" ? (
          <Preference changeCurrentPage={this.changeCurrentPage} />
        ) : null}
        {this.state.currnetPage == "game" ? (
          <Game changeCurrentPage={this.changeCurrentPage} />
        ) : null}
      </div>
    );
  }
}

export default App;
