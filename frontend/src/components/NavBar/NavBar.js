import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {

  toggleMenu = (e) => {
    
    const nav = document.querySelector('nav');

      e.preventDefault();
          nav.classList.toggle('mobile-open');
          document.querySelector('#navToggle').classList.toggle('open');
  }

  render() {
    return (
      <header>
        <div className="container-header">
          <div id="logo" className="menuUp">
                <h2>Logo</h2>
                <div id="navToggle">
                    <a onClick={this.toggleMenu}>&#9776;</a>
                </div>
            </div>


            <nav className="nav">
                <ul>
                    <li>
                      <Link to="/Home">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Topics">Topics</Link>
                    </li>
                </ul>
            </nav>
          </div>
      </header>
    );
  }
};

export default NavBar;
