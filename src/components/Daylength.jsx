import React, { Component } from "react";

const cities = [
  { name: "Amsterdam", lat: 52.4, lng: 4.9 },
  { name: "Paris", lat: 48.9, lng: 2.35 },
  { name: "Tokyo", lat: 35.68, lng: 139.76 },
  { name: "Warsaw", lat: 52.22, lng: 21.0 },
  { name: "Brasilia", lat: 15.82, lng: 47.9 }
];

export default class Daylenght extends Component {
  state = {
    DayData: {
      daylenght: ""
    }
  };

  componentDidMount = async () => {
    const latitude = cities[2].lat;
    const longitude = cities[2].lng;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    const parsedData = await response.json();
    const dayTime = parsedData.results.day_length;
    this.setState({
      DayData: {
        daylenght: dayTime
      }
    });
  };

  render() {
    console.log("is this consol log here?", this.state);
    const lenghtOfDay = this.state.DayData.daylenght;
    return <div>{lenghtOfDay}</div>;
  }
}
