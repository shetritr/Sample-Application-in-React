import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
class MapContainer extends Component {
  render() {
    const style = {
      width: "100%",
      height: "50%"
    };

    sleep(1000);
    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={14}
        initialCenter={{
          lat: this.props.Coordinates.lat,
          lng: this.props.Coordinates.lng
        }}
      >
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{
            lat: this.props.Coordinates.lat,
            lng: this.props.Coordinates.lng
          }}
        />

        <div />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "api key"
})(MapContainer);
