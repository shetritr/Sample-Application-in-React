import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

import Navber from "./Navber";
import Location from "./Location";
import Category from "./Category";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navber />
            <Route exact path="/Category" component={Category} />
            <Route exact path="/Location" component={Location} />
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
// import locationform from "./locationform";

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
//               <locationform />
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
