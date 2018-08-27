import React from "react";
import PropTypes from "prop-types";
import "../../Header.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <a href="#" className="navbar-brand">
          {props.brand}
        </a>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  brand: "my App"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};
export default Header;
