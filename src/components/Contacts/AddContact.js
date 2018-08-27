import React, { Component } from "react";
import { Consumer } from "../../Context";
import uuid from "uuid";
import TextInputGroup from "../layouts/TextInputGroup";
import axios from "axios";
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbitHandler = async (dispatch, name, phone, email, e) => {
    e.preventDefault();

    if (phone === "" || email === "" || name === "") {
      const errors = {};

      if (phone === "") {
        errors.phone = "phone number is required";
      }

      if (email === "") {
        errors.email = "email address is required";
      }

      if (name === "") {
        errors.name = "name  is required";
      }

      this.setState({ errors });

      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form
                  onSubmit={this.onSumbitHandler.bind(
                    this,
                    dispatch,
                    name,
                    phone,
                    email
                  )}
                >
                  <TextInputGroup
                    text="Name"
                    placeholder="enter Your Name ..."
                    value={name}
                    onChangeHandler={this.onChangeHandler}
                    name="name"
                    error={errors.name}
                  />

                  <TextInputGroup
                    text="Email"
                    placeholder="enter Your Email Address ..."
                    value={email}
                    type="email"
                    onChangeHandler={this.onChangeHandler}
                    name="email"
                    error={errors.email}
                  />

                  <TextInputGroup
                    text="Phone"
                    placeholder="enter Your Phone Number for example 011****** "
                    value={phone}
                    onChangeHandler={this.onChangeHandler}
                    name="phone"
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-info btn-lg btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
