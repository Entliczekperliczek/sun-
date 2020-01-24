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
      <div className="likes">
        <p>
          Do you like what the sun and the moon offer to you ? or not ?{" "}
          <b>{this.state.numLikes}</b> likes!{" "}
          <button onClick={this.incrementLike}>Like</button>
          <b>{this.state.numUnlikes}</b> Unlikes!
          <button onClick={this.incrementUnlike}>Unlike</button>
        </p>
      </div>
    );
  }
}
