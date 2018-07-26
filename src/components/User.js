import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
        <td>
          <a href="#" className="text-danger">
            X
          </a>
        </td>
      </tr>
    );
  }
}
