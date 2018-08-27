import React, { Component } from "react";
import { Consumer } from "../../Context";
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
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      newContact
    );
    dispatch({ type: "EDIT_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );
    const { name, email, phone } = res.data;
    this.setState({
      name,
      email,
      phone
    });
  }

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
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
                    value="Edit Contact"
                    className="btn btn-success btn-lg btn-primary"
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
