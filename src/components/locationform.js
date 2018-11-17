import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPosts } from "../actions/postAction";

class locationform extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPosts(post);
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label>Title</label>
              <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className=" col s6">
              <label>Body:</label>
              <br />
              <textarea
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
locationform.PropTypes = {
  createPosts: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPosts }
)(locationform);
