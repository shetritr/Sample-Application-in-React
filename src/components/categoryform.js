import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createCategory } from "../actions/categoryActions";

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
    const category = {
      name: this.state.name
    };
    this.props.createCategory(category);
  }
  render() {
    return (
      <div class="row">
        <h1>Add Category</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <div className="input-field col s6">
              <label>Category Name</label>
              <br />
              <input
                type="text"
                name="name"
                class="validate"
                onChange={this.onChange}
                value={this.state.name}
                required
              />
            </div>
          </div>
          <br />
          <button className="btn grey" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
CategoryForm.propTypes = {
  createCategory: propTypes.func.isRequired
};

export default connect(
  null,
  { createCategory }
)(CategoryForm);
