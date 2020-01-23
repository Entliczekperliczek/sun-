import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import LikeCounter from "./components/LikeCounter";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/cities" component={LikeCounter} />
        <Route exact path="/cities" component={MainComponent} />
      </div>
    );
  }
}

export default App;
