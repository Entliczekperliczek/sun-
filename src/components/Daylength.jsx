import React, { Component } from "react";

export default class Daylenght extends Component {
  state = {
    DayData: {
      daylenght: ""
    }
  };

  componentDidMount = async () => {
    const latitude = this.props.data.lat;
    const longitude = this.props.data.lng;
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
