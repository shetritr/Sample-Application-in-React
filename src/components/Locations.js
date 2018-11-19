import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    this.props.fetchPosts();

    if (nextProps.newPost) this.props.posts.unshift(nextProps.newPost);
  }

  render() {
    this.props.posts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    const postItems = this.props.posts.map((post, index) => (
      <div key={index}>
        <h3>
          {index + 1} : {post.name}
        </h3>
      </div>
    ));

    return (
      <div>
        <h1>posts</h1>
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

const mapStateToProps = state => {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(posts);
