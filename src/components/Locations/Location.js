import React, { Component } from "react";
import LocationForm from "./locationform";
import Locations from "./Locations";

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <header>
          <h1>Location Form</h1>
        </header>
        <LocationForm />
        <hr />
        <Locations />
      </div>
    );
  }
}

export default Location;
