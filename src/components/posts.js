import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchPosts,
  deleteCategory,
  editCategory
} from "../actions/postAction";

class posts extends Component {
  handleDelete = e => {
    this.props.deleteCategory(e.target.id);
  };
  handleEdit = e => {
    this.props.editCategory(e.target.id);
  };
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
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
        <div className="center">
          <button className="btn grey" onClick={this.handleDelete} id={index}>
            Delete
          </button>
          <Link to={`/Category/${index}`} className="btn grey" id={index}>
            Edit
          </Link>
        </div>
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
  deleteCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
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
  { fetchPosts, deleteCategory, editCategory }
)(posts);
