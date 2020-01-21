import React, { Component } from "react";

const cities = [{ name: "Amsterdam", lat: 52.4, lng: 4.9 }];

export default class SunriseView extends Component {
  state = {
    sunriseData: {
      sunriseTime: {}
    }
  };

  componentDidMount = async () => {
    const latitude = cities[0].lat;
    const longitude = cities[0].lng;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    const parsedData = await response.json();
    console.log("is sunrise there?", parsedData.results.sunrise);
    this.setState({
      sunriseData: sunriseTime
    });
  };

  render() {
    console.log(this.state.sunriseData.sunriseTime);
    return <div>Work in progress</div>;
  }
}
