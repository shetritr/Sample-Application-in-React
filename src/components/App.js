import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import About from "./Abount";

import Home from "./Home";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Route from "react-router-dom/Route";

// import Posts from "./posts";
// import PostForm from "./postform";

// import store from "../store";

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="App">
//             <div>
//               <header>
//                 <h1>My App</h1>
//               </header>
//               <PostForm />
//               <hr />
//               <Posts />
//             </div>
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }

// export default App;
