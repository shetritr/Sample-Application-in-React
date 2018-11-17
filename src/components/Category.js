import React, { Component } from "react";

import Posts from "./posts";
import LocationForm from "./locationform";

class Category extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header>
            <h1>My App</h1>
          </header>
          <LocationForm />
          <hr />
          <Posts />
        </div>
      </div>
    );
  }
}

export default Category;
