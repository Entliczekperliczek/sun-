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

  componentDidUpdate = async prevProps => {
    if (this.props.currentCity === prevProps.currentCity) return;
    const latitude = this.props.currentCity.lat;
    const longitude = this.props.currentCity.lng;
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
        <div className="twilight-div">
          <div className="twiligt"> TIME OF SUNRISE 🌞{timeTwo} </div>
          <div className="twiligt"> TIME OF SUNSET 🌞 {time}</div>
          <div className="twiligt">
            {" "}
            BEGINING OF TWILIGHT 🌝 {civiltwilight}{" "}
          </div>
          <div className="twiligt"> END OF TWILIGHT 🌝 {civiltwilightTwo}</div>
          <div className="twiligt"> LENGTH OF YOUR DAY ✨ {lenghtOfDay} </div>
        </div>
      </div>
    );
  }
}

export default Data;
