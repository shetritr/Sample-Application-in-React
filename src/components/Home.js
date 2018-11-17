import React, { Component } from "react";

import Posts from "./posts";
import PostForm from "./postform";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header>
            <h1>My App</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </div>
    );
  }
}

export default Home;
