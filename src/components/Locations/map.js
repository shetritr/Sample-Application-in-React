import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 0,
//       lng: 0
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           className="container karta"
//           bootstrapURLKeys={{
//             key: "AIzaSyBtNLJsO8fqxd6aCBMdi2tEiHMjLx3MtKE",
//             language: "en"
//           }}

//           defaultCenter={{ lat: 0, lng: 0 }}
//           defaultZoom={11}
//         />
//       </div>
//     );
//   }
// }

// export default SimpleMap;

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
  apiKey: "AIzaSyBtNLJsO8fqxd6aCBMdi2tEiHMjLx3MtKE"
})(MapContainer);
