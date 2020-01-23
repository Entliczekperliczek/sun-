import React, { Component } from "react";
export default class LikeCounter extends Component {
  state = {
    numLikes: 0,
    numUnlikes: 0
  };
  incrementLike = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };
  incrementUnlike = () => {
    this.setState({
      numUnlikes: this.state.numUnlikes + 1
    });
  };
  render() {
    return (
      <div>
        <p>
          This app has <b>{this.state.numLikes}</b> likes!
          <button onClick={this.incrementLike}>Like</button>
          This app has <b>{this.state.numUnlikes}</b> Unlikes!
          <button onClick={this.incrementUnlike}>Unlike</button>
        </p>
      </div>
    );
  }
}
