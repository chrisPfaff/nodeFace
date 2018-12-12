import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import "../scss/app.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
