import React, { Component } from "react";
import User from "./User";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users.map(user => (
      <User
        key={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    ));
    return (
      <div className="container">
        <h3 className="page-header">Users</h3>
        <hr />
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
