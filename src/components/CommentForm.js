import React, { Component } from "react";
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", text: "" };
  }
  handleCommentChange(e) {
    this.setState({ comment: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state.comment.trim();
    const text = this.state.text.trim();
    if (!text || !comment) {
      return;
    }
    this.props.afterSubmit(text);
    this.setState({ comment: "", text: "" });
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.comment}
          onChange={this.handleCommentChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Give your comment"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
export default CommentForm;
