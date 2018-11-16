import React, { Component } from "react";
import { Provider } from "react-redux";

import Posts from "./posts";
import PostForm from "./postform";

import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <h1>My App</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
