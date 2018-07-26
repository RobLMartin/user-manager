import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "../actions/userActions";

class AddUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h3 className="page-header">Add User</h3>
        <hr />
        <form action="">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name."
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter desired Username."
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
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

export default AddUser;
