import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">UMSoft</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Products</Link>
          <Link to="/">News</Link>
          <Link to="/">Media</Link>
          <Link to="/">Contacts</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
