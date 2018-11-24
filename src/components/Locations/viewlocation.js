import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Map from "./map";

class viewLocation extends Component {
  render() {
    var array = JSON.parse("[" + this.props.location.Coordinates + "]");

    return (
      <div class="center">
        <div class="col s12 m6">
          <br />
          <h1> {this.props.location.name}</h1>
          <p>
            <br />
            Address: {this.props.location.Address}
            <br />
            Category: {this.props.location.Category}
            <br />
            Coordinates: {this.props.location.Coordinates}
          </p>
          <Map Coordinates={{ lat: array[0], lng: array[1] }} />
        </div>
      </div>
    );
  }
}
viewLocation.propTypes = {
  location: propTypes.object
};
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.view_id;

  return {
    location: state.locations.locations[id]
  };
};
export default connect(
  mapStateToProps,
  {}
)(viewLocation);
