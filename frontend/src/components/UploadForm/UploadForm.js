import React, { Component } from "react";
import keys from "../../keys";
import request from "superagent";
import "./UploadForm.css";
import placeholder from "./img/placeholder.png";

let { CLOUDINARY_PRESET, CLOUDINARY_URL } = keys;

class UploadForm extends Component {
  state = {
    fileToUpload: null,
    uploadedFileUrl: null
  };

  post(data) {
    const url = { data };
    fetch("/upload", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(url)
    });
  }

  handleChange(files) {
    this.setState({
      fileToUpload: files[0]
    });
  }

  submitFile = () => {
    console.log('submit file')
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
          uploadedFileUrl: response.body.secure_url
        });

        this.post(this.state.uploadedFileUrl);
      }
    });
  };

  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <div className="form-container">
            <div className="form-container-left">
              <h1 className="h1-title">Upload</h1>
              <div className="form">
                <input type="text" name="title" className="form-input title" id="title" placeholder="Title" />
                <textarea name="description" className="description" id="description" placeholder="Description"></textarea>
                <input
                  type="file"
                  multiple={false}
                  accept="image/*"
                  name="image"
                  className="upload-image"
                  onChange={e => this.handleChange(e.target.files)}
                />

                <button className="button" onClick={this.submitFile}>Upload</button>
              </div>
            </div>
            <div className="form-container-right">
              {this.state.uploadedFileUrl ? <img className="preview-img" src={this.state.uploadedFileUrl} alt="placeholder" /> : ''}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default UploadForm;
