import React from 'react';
import './Home.css';
import { UploadForm } from '../../components/UploadForm';
import { ListView } from '../../components/ListView';

export default class Home extends React.Component {

  state = {
    modalIsOpen: false,
    newUpload: false,
    loginIsOpen: false
  }

  handleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  LoginModal = () => {
    this.setState({
      loginIsOpen: !this.state.loginIsOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.modalIsOpen && <UploadForm newUpload={this.state.newUpload} closeModal={this.handleModal} />}
        <button onClick={this.handleModal}>Upload Image</button>
        <div className="container">
        <ListView />
        </div>
      </React.Fragment>
    );
  };
}