import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createLocation } from "../../actions/locationActions";

class LocationForm extends Component {
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
    this.props.createLocation(this.state);
  }

  render() {
    const categoriesList = this.props.categories.map((name, index) => (
      <option key={index} value={name.name}>
        {name.name}
      </option>
    ));

    return (
      <div class="row">
        <form class="col s12" onSubmit={this.onSubmit}>
          <div class="row">
            <div class="col s6">
              <label htmlFor="Name">Name</label>
              <input
                name="name"
                type="text"
                class="validate"
                onChange={this.onChange}
                value={this.state.name}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <label htmlFor="Address">Address</label>
              <input
                name="Address"
                type="text"
                class="validate"
                onChange={this.onChange}
                value={this.state.Address}
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <label htmlFor="Coordinates">Coordinates </label>
              <input
                name="Coordinates"
                class="validate"
                onChange={this.onChange}
                placeholder="XX.xxxxxx, XX.xxxxxx"
                pattern="[0-9]{2}.[0-9]{6}, [0-9]{2}.[0-9]{6}"
                title="Coordinates number of form XX.XXXXXX, XX.XXXXXX required"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <label htmlFor="Category">Categories</label>
              <select
                class="browser-default"
                name="Category"
                onChange={this.onChange}
                value={this.state.Category}
                required
              >
                <option value="" disabled selected>
                  Choose your option
                </option>
                {categoriesList}
              </select>
            </div>
          </div>
          <button className="btn grey" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

LocationForm.propTypes = {
  createLocation: propTypes.func.isRequired,
  categories: propTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};
export default connect(
  mapStateToProps,
  { createLocation }
)(LocationForm);
