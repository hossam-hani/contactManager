import React, { Component } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contatcs from "./components/Contacts/Contacts";
import { Provider } from "./Context";
import AddContact from "./components/Contacts/AddContact";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import About from "./components/pages/about";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/Contacts/EditContact";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header brand="Contact Manager" />
            <div className="container">
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

              <Switch>
                <Route exact path="/" component={Contatcs} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
