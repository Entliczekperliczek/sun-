import React, { Component } from "react";
import { Link } from "react-router-dom";
class WelcomePage extends Component {
  render() {
    return (
      <div>
        Here comes the sun
        <Link to={`/cities`}>Check</Link>
      </div>
    );
  }
}

export default WelcomePage;
