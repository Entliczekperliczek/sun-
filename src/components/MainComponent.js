import React, { Component } from "react";
import Buttons from "./Buttons";
import Data from "./Data";
import LikeCounter from "./LikeCounter";
import CommentList from "./CommentList";

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
  { name: "Hong Kong", lat: 22.31, lng: 114.16 },
  { name: "Berlin", lat: 52.52, lng: 13.4 },
  { name: "Prague", lat: 50.07, lng: 14.43 },
  { name: "Vienna", lat: 48.2, lng: 16.37 },
  { name: "Rome", lat: 41.9, lng: 12.49 },
  { name: "Bucharest", lat: 44.42, lng: 26.1 },
  { name: "Athens", lat: 37.98, lng: 23.72 },
  { name: "Ankara", lat: 39.93, lng: 32.85 },
  { name: "Baghdad", lat: 33.31, lng: 44.36 },
  { name: "Riyadh", lat: 24.71, lng: 46.67 },
  { name: "Taipei", lat: 25.03, lng: 121.56 },
  { name: "Manila", lat: 14.6, lng: 121.0 },
  { name: "Port Moresby", lat: 9.44, lng: 147.18 },
  { name: "Helsinki", lat: 60.16, lng: 24.93 },
  { name: "Stockholm", lat: 59.32, lng: 18.06 },
  { name: "Kyiv", lat: 50.45, lng: 30.52 },
  { name: "Ottawa", lat: 45.42, lng: 75.69 },
  { name: "Dublin", lat: 53.34, lng: 6.26 },
  { name: "Madrid", lat: 40.41, lng: 3.7 },
  { name: "Luanda", lat: 8.81, lng: 13.23 },
  { name: "Antananarivo", lat: 18.87, lng: 47.5 },
  { name: "Colombo", lat: 6.92, lng: 79.86 },
  { name: "Buenos Aires", lat: 34.6, lng: 58.38 },
  { name: "Brussels", lat: 50.85, lng: 4.35 },
  { name: "Bogota", lat: 4.71, lng: 74.07 },
  { name: "Santiago", lat: 33.44, lng: 70.66 },
  { name: "Havana", lat: 23.11, lng: 82.36 },
  { name: "Prague", lat: 50.07, lng: 14.43 },
  { name: "Copenhagen", lat: 55.67, lng: 12.56 },
  { name: "Tbilisi", lat: 41.71, lng: 44.82 },
  { name: "Budapest", lat: 47.49, lng: 19.04 },
  { name: "Jerusalem", lat: 31.76, lng: 35.21 },
  { name: "Kingston", lat: 18.01, lng: 76.8 },
  { name: "Nairobi", lat: 1.29, lng: 36.82 },
  { name: "Łódź", lat: 51.75, lng: 19.45 }
];
class MainComponent extends Component {
  state = {
    currentCity: ""
  };

  changeCity = cityName => {
    const cityObjinArr = cities.find(city => {
      if (city.name === cityName) {
        return city;
      }
    });
    console.log("found", cityObjinArr);

    this.setState({ currentCity: cityObjinArr });
  };

  render() {
    return (
      <div className="bg">
        <h1 className="header">
          🌞~ CHOOSE YOUR CITY TO CHECK SUN AND MOON ~🌝
        </h1>
        <div className="citybuttons">
          <Buttons className="button" changeCity={this.changeCity}></Buttons>
        </div>
        <div className="flex">
          <Data currentCity={this.state.currentCity}></Data>
          <div className="Comments">
            {" "}
            <CommentList></CommentList>
          </div>
        </div>
        <LikeCounter></LikeCounter>
      </div>
    );
  }
}

export default MainComponent;
