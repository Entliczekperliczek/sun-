import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomePage extends Component {
  render() {
    return (
      <div className="bg">
        <div className="headertwo"> 🌞~ Here comes the sun ~ 🌞 </div>
        <div className="text">
          {" "}
          Nothing is more important to us on Earth than the Sun. Without the
          Sun's heat and light, the Earth would be a lifeless ball of ice-coated
          rock. The Sun warms our seas, stirs our atmosphere, generates our
          weather patterns, and gives energy to the growing green plants that
          provide the food and oxygen for life on Earth.{" "}
          <Link className="link" to={`/cities`}>
            Check what cosmos propose it for you{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
