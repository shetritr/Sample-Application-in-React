import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navber = props => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">My Location</a>
      </div>
      <ul className="right">
        <li>
          <Link to="/Category">Category</Link>
        </li>
        <li>
          <Link to="/Location">Location</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navber);
