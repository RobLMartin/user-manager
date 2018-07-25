import React, { Component } from "react";

export default class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return <div />;
  }
}
