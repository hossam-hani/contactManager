import React from "react";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <div>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <NavLink
            className="nav-link "
            exact
            activeClassName="nav-link active"
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link "
            exact
            activeClassName="nav-link active"
            to="/about"
          >
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link "
            exact
            activeClassName="nav-link active"
            to="/contact/add"
          >
            Add Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
