import React, { Component } from "react";

import "./Spinner.css";

class Spinner extends Component {

  render() {
    return (
      <div className="loading-container">
        <div className="load">
            <div className="blockcont">
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>

                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>

                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>

            </div>
        </div>
      </div>
      
    );
  }
}

export default Spinner;
