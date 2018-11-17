import React from "react";

const Navber = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">My Location</a>
      </div>
      <ul className="right">
        <li>
          <a href="/Category">Category</a>
        </li>
        <li>
          <a href="/Location">Location</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
