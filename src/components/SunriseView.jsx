import React, { Component } from "react";

export default class SunriseView extends Component {
  state = {
    sunriseData: {
      sunriseTime: ""
    }
  };

  componentDidMount = async () => {
    const latitude = this.props.data.lat;
    const longitude = this.props.data.lng;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    const parsedData = await response.json();
    const sunriseTime = parsedData.results.sunrise;
    this.setState({
      sunriseData: {
        sunriseTime: sunriseTime
      }
    });
  };

  render() {
    console.log("render of sunriseview", this.props);
    const time = this.state.sunriseData.sunriseTime;
    return <div>{time}</div>;
  }
}
