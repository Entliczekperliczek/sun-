import React, { Component } from "react";
import Buttons from "./Buttons";
import Data from "./Data";

const cities = [
  { name: "Amsterdam", lat: 52.4, lng: 4.9 },
  { name: "Paris", lat: 48.9, lng: 2.35 },
  { name: "Tokyo", lat: 35.68, lng: 139.76 },
  { name: "Warsaw", lat: 52.22, lng: 21.0 },
  { name: "Brasilia", lat: 15.82, lng: 47.9 },
  { name: "New York", lat: 40.71, lng: 74.0 },
  { name: "Mexico", lat: 23.63, lng: 102.55 },
  { name: "Beijing", lat: 39.9, lng: 116.4 },
  { name: "Lisbon", lat: 38.7, lng: 9.1 },
  { name: "Moscow", lat: 55.7, lng: 37.61 },
  { name: "New Delhi", lat: 28.61, lng: 77.2 },
  { name: "Cape Town", lat: 33.92, lng: 18.42 },
  { name: "Sydney", lat: 33.86, lng: 151.2 },
  { name: "Cairo", lat: 30.04, lng: 31.23 },
  { name: "Tel aviv", lat: 32.08, lng: 34.78 },
  { name: "London", lat: 51.507, lng: 0.127 },
  { name: "Tehran", lat: 35.68, lng: 51.38 },
  { name: "Bangkok", lat: 13.75, lng: 100.5 },
  { name: "Hong Kong", lat: 22.31, lng: 114.16 }
];
class MainComponent extends Component {
  state = {
    currentCity: ""
  };

  changeCity = cityName => {
    console.log("changed to city", cityName);
    const cityObjinArr = cities.filter((city, index) => {
      console.log(" ??", cityName, city);

      if (city.name == cityName) {
        console.log("got her");

        return cities[index];
      }
    });
    console.log("found", cityObjinArr);

    this.setState({ currentCity: cityObjinArr[0] });
  };

  render() {
    if (this.state.currentCity === "") {
      return <Buttons changeCity={this.changeCity}></Buttons>;
    }
    return (
      <div>
        <Data data={this.state.currentCity}></Data>
      </div>
    );
  }
}

export default MainComponent;
