import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fatchPosts } from "../actions/postAction";

class posts extends Component {
  componentWillMount() {
    this.props.fatchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) this.props.posts.unshift(nextProps.newPost);
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>postssss</h1>
        {postItems}
      </div>
    );
  }
}

posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(
  mapStateToProps,
  { fatchPosts }
)(posts);
