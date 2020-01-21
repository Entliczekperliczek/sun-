import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SunriseView from "../src/components/SunriseView";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <SunriseView></SunriseView>
      </div>
    );
  }
}

export default App;
