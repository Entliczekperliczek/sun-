import React, { Component } from "react";

export default class SunsetView extends Component {
  state = {
    sunsetData: {
      sunsetTime: ""
    }
  };

  componentDidMount = async () => {
    const latitude = this.props.data.lat;
    const longitude = this.props.data.lng;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    const parsedData = await response.json();
    const sunsetTime = parsedData.results.sunset;
    this.setState({
      sunsetData: {
        sunsetTime: sunsetTime
      }
    });
  };

  render() {
    console.log("is this consol log here?", this.state);
    const time = this.state.sunsetData.sunsetTime;
    return <div>{time}</div>;
  }
}
