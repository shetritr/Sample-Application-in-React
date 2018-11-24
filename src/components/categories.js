import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchcategories,
  deleteCategory,
  editCategory
} from "../actions/categoryActions";

class categories extends Component {
  handleDelete = e => {
    this.props.deleteCategory(e.target.id);
  };

  render() {
    this.props.categories.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    const categorycategories = this.props.categories.map((category, index) => (
      <div key={index}>
        <h3>
          {index + 1} : {category.name}
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
        <h1>categories</h1>
        {categorycategories}
      </div>
    );
  }
}

categories.propTypes = {
  fetchcategories: propTypes.func.isRequired,
  deleteCategory: propTypes.func.isRequired,
  editCategory: propTypes.func.isRequired,
  categories: propTypes.array.isRequired,
  newCategory: propTypes.object
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    newCategory: state.categories.category
  };
};

export default connect(
  mapStateToProps,
  { fetchcategories, deleteCategory, editCategory }
)(categories);
