import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCategory } from "../actions/postAction";

class CategoryForm extends Component {
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
    this.setState({ [e.target.name]: e.target.value });
    const post = {
      name: this.state.name
    };
    this.props.createCategory(post);
  }
  render() {
    return (
      <div>
        <h1>Add Category</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label>Category Name</label>
              <br />
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
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
CategoryForm.PropTypes = {
  createCategory: PropTypes.func.isRequired
};

export default connect(
  null,
  { createCategory }
)(CategoryForm);
