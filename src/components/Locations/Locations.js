import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLocation } from "../../actions/locationActions";

class Locations extends Component {
  handleDelete = e => {
    this.props.deleteLocation(e.target.id);
  };

  render() {
    this.props.Locations.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    const categoryLocations = this.props.Locations.map((location, index) => (
      <div key={index}>
        <h2>Name: {location.name}</h2>
        <br />
        <h3>Address: {location.Address} </h3>
        <br />
        <h3>Coordinates: {location.Coordinates} </h3>
        <br />
        <h3>Category: {location.Category} </h3>
        <br />
        <div className="center">
          <button className="btn grey" onClick={this.handleDelete} id={index}>
            Delete
          </button>
          <Link to={`/Location/${index}`} className="btn grey" id={index}>
            View
          </Link>
          <Link to={`/Location/edit/${index}`} className="btn grey" id={index}>
            Edit
          </Link>
        </div>
        <div class="divider" />
      </div>
    ));

    return (
      <div class="row">
        <div className="center">
          <h1>Locations</h1>
        </div>
        <div class="col">
          <div class="divider" />
          {categoryLocations}
        </div>
      </div>
    );
  }
}

Locations.propTypes = {
  Locations: propTypes.array.isRequired,
  deleteLocation: propTypes.func.isRequired,
  newLocation: propTypes.object
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    Locations: state.locations.locations,
    newLocation: state.locations.location
  };
};

export default connect(
  mapStateToProps,
  { deleteLocation }
)(Locations);
