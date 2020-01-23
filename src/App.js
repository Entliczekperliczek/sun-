import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import MainComponent from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/cities" component={MainComponent} />
      </div>
    );
  }
}

export default App;
