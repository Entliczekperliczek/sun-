import React, { Component } from "react";

export default class TwilightBegin extends Component {
  state = {
    TwilightData: {
      twilightbegin: ""
    }
  };

  componentDidMount = async () => {
    const latitude = this.props.data.lat;
    const longitude = this.props.data.lng;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    const parsedData = await response.json();
    const twilightTime = parsedData.results.civil_twilight_begin;
    this.setState({
      TwilightData: {
        twilightbegin: twilightTime
      }
    });
  };

  render() {
    console.log("is this consol log here?", this.state);
    const civiltwilight = this.state.TwilightData.twilightbegin;
    return <div>{civiltwilight}</div>;
  }
}
