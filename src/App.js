import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="jumbotron text-center">
            <div className="container">
              <h1>User Manager</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                inventore rem earum distinctio, quo nobis deleniti
                necessitatibus unde pariatur iusto, facilis quas libero
                provident, tempore in iure eum ea. Assumenda.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <AddUser />
          <br />
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;
