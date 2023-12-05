import React from "react";
import { Link } from "react-router-dom";

// Component for the navigation bar
const Navbar = (props) => {
  return (
    // Navigation bar with a container
    <nav className="navbar" style={{ backgroundColor: "#e3f2fd;" }}>
      <div className="container">
        {/* Link to navigate to the home page */}
        <Link to="/">
          {/* Icon for the home page */}
          <i className="fa-sharp fa-solid fa-rectangle-vertical-history fa-bounce"></i>
          {/* Button to go to the Album List */}
          <button className="btn btn-dark">Album List</button>
        </Link>

        {/* Link to navigate to the specified path */}
        <Link to={props.path}>
          {/* Button to display the current page */}
          <button className="btn btn-outline-light">{props.page}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
