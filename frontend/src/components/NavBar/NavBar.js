import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {

  toggleMenu = e => {
    const nav = document.querySelector("nav");
    e.preventDefault();
    nav.classList.toggle("mobile-open");
    document.querySelector("#navToggle").classList.toggle("open");
  };

  render() {
    return (
      <header>
        <div className="container-header">
          <div id="logo" className="menuUp">
            <h2>Gallery<span className="logo-span">+</span></h2>
            <div id="navToggle">
              <a onClick={this.toggleMenu}>&#9776;</a>
            </div>
          </div>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a onClick={this.props.modalOpen}>Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
