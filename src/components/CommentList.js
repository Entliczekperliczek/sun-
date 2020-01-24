import React, { Component } from "react";
import CommentForm from "./CommentForm";
class CommentList extends Component {
  state = {
    comments: []
  };
  addComment = text => {
    console.log("hi", text);
    this.setState({
      comments: this.state.comments.concat(text)
    });
  };
  render() {
    return (
      <div className="commentList">
        <CommentForm afterSubmit={this.addComment} />
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentList;
