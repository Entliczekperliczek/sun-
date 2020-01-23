import React, { Component } from "react";

class Data extends Component {
  state = {
    data: {
      twilightend: "",
      twilightbegin: "",
      sunsetTime: "",
      sunriseTime: "",
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
    const twilightTime = parsedData.results.civil_twilight_end;
    const twilightTimeTwo = parsedData.results.civil_twilight_begin;
    const sunsetTime = parsedData.results.sunset;
    const sunriseTime = parsedData.results.sunrise;
    const dayTime = parsedData.results.day_length;
    this.setState({
      data: {
        twilightend: twilightTime,
        twilightbegin: twilightTimeTwo,
        sunsetTime: sunsetTime,
        sunriseTime: sunriseTime,
        daylenght: dayTime
      }
    });
  };

  render() {
    const civiltwilight = this.state.data.twilightend;
    const civiltwilightTwo = this.state.data.twilightbegin;
    const time = this.state.data.sunsetTime;
    const timeTwo = this.state.data.sunriseTime;
    const lenghtOfDay = this.state.data.daylenght;
    return (
      <div>
        {civiltwilight} {civiltwilightTwo} {time} {timeTwo} {lenghtOfDay},
      </div>
    );
  }
}

export default Data;
