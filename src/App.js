import React, { Component } from "react";
import "./App.css";
import SunriseView from "../src/components/SunriseView";
import SunsetView from "./components/SunsetView";
import Daylenght from "./components/Daylength";
import TwilightBegin from "./components/TwilightBegin";
import TwilightEnd from "./components/TwilightEnd";
class App extends Component {
  render() {
    return (
      <div>
        <SunriseView></SunriseView>
        <SunsetView></SunsetView>
        <Daylenght></Daylenght>
        <TwilightBegin></TwilightBegin>
        <TwilightEnd></TwilightEnd>
      </div>
    );
  }
}

export default App;
