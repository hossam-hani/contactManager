import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteHandler = async (dispatch, id) => {
    axios.delete("https://jsonplaceholder.typicode.com/users/1");
    dispatch({ type: "DELETE_CONTACT", payload: { id: id } });
  };

  render() {
    const { name, phone, email, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h5>
                  {name}
                  <i
                    className={
                      showContactInfo
                        ? "fas fa-chevron-circle-up ml-3 "
                        : "fas fa-chevron-circle-down ml-3 "
                    }
                    onClick={this.onShowClick}
                  />
                  <i
                    className="fas fa-trash ml-3 text-danger"
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={this.onDeleteHandler.bind(this, dispatch, id)}
                  />
                  <Link to={`/contact/edit/${id}`}>
                    <i
                      className="fas fa-edit text-primary"
                      style={{
                        float: "right",
                        cursor: "pointer"
                      }}
                    />
                  </Link>
                </h5>
              </div>
              {showContactInfo ? (
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">Email : {email}</li>
                    <li className="list-group-item  ">
                      phone number : {phone}
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
