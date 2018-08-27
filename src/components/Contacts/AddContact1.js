import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbitHandler = e => {
    e.preventDefault();
    const Contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(Contact);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSumbitHandler}>
            <div className="form-group">
              <label forhtml="name">Name :</label>
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Name ..."
                value={name}
                name="name"
                onChange={this.onChangeHandler}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label forhtml="name">Email :</label>
              <input
                type="email"
                className="form-control form-control"
                placeholder="Enter Email ..."
                value={email}
                name="email"
                onChange={this.onChangeHandler}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label forhtml="name">Phone :</label>
              <input
                type="text"
                className="form-control form-control"
                placeholder="Enter Your Phone Number ..."
                value={phone}
                name="phone"
                onChange={this.onChangeHandler}
                ref={this.phoneInput}
              />
            </div>

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-info btn-lg btn-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}
