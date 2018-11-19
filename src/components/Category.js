import React, { Component } from "react";

import Posts from "./posts";
import CategoryForm from "./categoryform";

class Category extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header>
            <h1>My App</h1>
          </header>
          <CategoryForm />
          <hr />
          <Posts />
        </div>
      </div>
    );
  }
}

export default Category;
