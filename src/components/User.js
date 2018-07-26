import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  deleteUser(id, e) {
    e.preventDefault();
    this.props.onDelete(id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
        <td>
          <a
            href="#"
            className="text-danger"
            onClick={this.deleteUser.bind(this, this.props.id)}
          >
            X
          </a>
        </td>
      </tr>
    );
  }
}
