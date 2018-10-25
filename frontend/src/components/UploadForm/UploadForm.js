import React, { Component } from "react";
import keys from "../../keys";
import request from "superagent";
import moment from 'moment';
import "./UploadForm.css";
import { Spinner } from "../Spinner";

let { CLOUDINARY_PRESET, CLOUDINARY_URL } = keys;

class UploadForm extends Component {
  state = {
    title: '',
    description: '',
    fileToUpload: null,
    uploadedFileUrl: null,
    date: null
  };

  post(data) {
    console.log(data);
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
    // Check if its the file upload or normal input
    if(e.files) {
      NS.fileToUpload = e.files[0]
    }
    else {
      NS[e.name] = e.value;
    }
    // Set state with new version of state
    this.setState(NS);
  }

  submitFile = () => {
    const file = this.state.fileToUpload;

    let upload = request
      .post(CLOUDINARY_URL)
      .field("upload_preset", CLOUDINARY_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url) {
        this.setState({
          uploadedFileUrl: response.body.secure_url,
          image: response.body.secure_url
        });

        // Prepare data for post to database
        const data = {...this.state, date: moment()};
        console.log(data)
        delete data.fileToUpload;
        delete data.uploadedFileUrl;
        
        // Send to database
        this.post(data);
      }
    });
  };

  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <span onClick={this.props.closeModal} className="modal-close">+</span>
          <div className="form-container">
            <div className="form-container-left">
              <h1 className="h1-title">Upload</h1>
              <div className="form">

                <input type="text" name="title" onChange={e => this.handleChange(e.target)} className="form-input title" id="title" placeholder="Title" value={this.state.title} />
                <textarea name="description"  onChange={e => this.handleChange(e.target)}  className="description" id="description" placeholder="Description" value={this.state.description}></textarea>
                  
                  <div className="button-container">
                    <div className="upload-btn-wrapper">
                      <button className="button">Select an Image</button>

                      <input
                        type="file"
                        multiple={false}
                        accept="image/*"
                        name="image"
                        className="upload-image"
                        onChange={e => this.handleChange(e.target)}
                      />
                    </div>

                    <button className="button btn-submit" onClick={this.submitFile}>Upload</button>
                  </div>
              </div>
            </div>
            <div className="form-container-right">
              {this.state.uploadedFileUrl ? <img className="preview-img" src={this.state.uploadedFileUrl} alt="placeholder" /> : <Spinner />}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default UploadForm;
