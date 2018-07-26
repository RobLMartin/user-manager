import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "../actions/userActions";
import uuid from "uuid";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      id: uuid.v4(),
      name: this.state.name,
      username: this.state.username,
      email: this.state.email
    };

    this.props.createUser(user);
  }

  render() {
    return (
      <div className="container">
        <h3 className="page-header">Add User</h3>
        <hr />
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter your name."
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter desired Username."
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email address."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AddUser.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { createUser }
)(AddUser);
