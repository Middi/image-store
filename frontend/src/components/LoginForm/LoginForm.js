import React, { Component } from "react";
import moment from 'moment';
import "./LoginForm.css";

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    email: ''
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
        <div className="login-modal">
          <span onClick={this.props.modalOpen} className="modal-close">+</span>
          <div className="login-form-container">
              <div className="form">

              <h1 className="h1-title">Login</h1>

                <input type="text" name="username" onChange={e => this.handleChange(e.target)} className="form-input title" id="username" placeholder="Username" value={this.state.username} />
                <input type="email" name="email" onChange={e => this.handleChange(e.target)} className="form-input email" id="email" placeholder="Email" value={this.state.email} />
                <input type="password" name="password" onChange={e => this.handleChange(e.target)}  className="form-input" id="password" placeholder="Password" value={this.state.password} />
                  <div className="button-container">

                    <button className="button" onClick={this.submitFile}>Login</button>
                    <button className="button btn-submit" onClick={this.submitFile}>Sign-Up</button>
                  </div>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

