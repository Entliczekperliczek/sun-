import React, { Component } from "react";

export default class TwilightEnd extends Component {
  state = {
    TwilightData: {
      twilightend: ""
    }
  };

  componentDidMount = async () => {
    const latitude = this.props.data.lat;
    const longitude = this.props.data.lng;
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    const parsedData = await response.json();
    const twilightTime = parsedData.results.civil_twilight_end;
    this.setState({
      TwilightData: {
        twilightend: twilightTime
      }
    });
  };

  render() {
    console.log("is this consol log here?", this.state);
    const civiltwilight = this.state.TwilightData.twilightend;
    return <div>{civiltwilight}</div>;
  }
}
