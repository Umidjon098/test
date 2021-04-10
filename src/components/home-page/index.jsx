import React, { Component } from "react";
import { Router } from "react-router";
import Navbar from "../navbar/navbar";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <Navbar />
      </header>
    );
  }
}

export default HomePage;
