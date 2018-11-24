import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

import Navber from "./Navber";
import Location from "./Locations/Location";
import Category from "./Category";
import CategoryEdit from "./categoryedit";
import ViewLocation from "./Locations/viewlocation";
import EditLocation from "./Locations/editlocation";

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
            <Route exact path="/Category/:edit_id" component={CategoryEdit} />
            <Route exact path="/Location/:view_id" component={ViewLocation} />
            <Route
              exact
              path="/Location/edit/:view_id"
              component={EditLocation}
            />
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

// import categories from "./categories";
// import categoryform from "./categoryform";

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
//               <categoryform />
//               <hr />
//               <categories />
//             </div>
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }

// export default App;
