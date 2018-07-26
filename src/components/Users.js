import React, { Component } from "react";
import User from "./User";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../actions/userActions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newUser) {
      this.props.users.unshift(nextProps.newUser);
    }
  }

  handleDeleteUser = id => {
    this.props.deleteUser(id);
  };

  render() {
    const users = this.props.users.map(user => (
      <User
        onDelete={this.handleDeleteUser.bind(this)}
        key={user.id}
        id={user.id}
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
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  newUser: PropTypes.object
};

const mapStateToProps = state => ({
  users: state.users.users,
  newUser: state.users.user
});

export default connect(
  mapStateToProps,
  { deleteUser, fetchUsers }
)(Users);
