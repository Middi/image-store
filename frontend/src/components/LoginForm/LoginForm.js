import React, { Component } from "react";
import moment from 'moment';
import "./LoginForm.css";

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  post(data) {
    fetch("/upload", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(data)
    });
  }

  handleChange = e => {
    // Spread state into new variable
    const NS = {...this.state};
    NS[e.name] = e.value;
    // Set state with new version of state
    this.setState(NS);
  }

  handleSubmit = () => {
    
  };

  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <span onClick={this.props.modalOpen} className="modal-close">+</span>
          <div className="form-container">
            <div className="form-container-left">
              <h1 className="h1-title">Login</h1>
              <div className="form">

                <input type="text" name="username" onChange={e => this.handleChange(e.target)} className="form-input title" id="username" placeholder="Username" value={this.state.username} />
                <input type="password" name="password" onChange={e => this.handleChange(e.target)}  className="form-input" id="password" placeholder="Password" value={this.state.password} />
                  <div className="button-container">

                    <button className="button" onClick={this.submitFile}>Login</button>
                    <button className="button btn-submit" onClick={this.submitFile}>Sign-Up</button>
                  </div>
              </div>
            </div>
            <div className="form-container-right">
            </div>
          </div>
        </div>

      </div>
    );
  }
}

