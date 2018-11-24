import React, { Component } from "react";

import Categories from "./categories";
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
          <Categories />
        </div>
      </div>
    );
  }
}

export default Category;
