import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Users from "./components/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          my app
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;
