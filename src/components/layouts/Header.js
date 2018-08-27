import React from "react";
import PropTypes from "prop-types";
import "../../Header.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="index3.html">
        {props.brand}
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              activeClassName="nav-link active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/contact/add"
            >
              Add Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brand: "my App"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};
export default Header;
