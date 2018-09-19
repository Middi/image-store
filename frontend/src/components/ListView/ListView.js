import React, { Component } from 'react';
import axios from 'axios';

import request from 'superagent';

const CLOUDINARY_CLOUD_NAME = 'middi';
const CLOUDINARY_UPLOAD_PRESET = 'l4a3iuvn';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

class ListView extends Component {


  state = {
    loading: true,
    arr: [],
    uploadedFile: null,
    uploadedFileCloudinaryUrl: ''
  }

  callAPI() {
    fetch('/api/items')
      .then(res => res.json())
      .then(res => {
        this.setState({
          arr: res,
          loading: false
        });
      })
  }



  handleChange(files) {
    this.setState({
      uploadedFile: files[0]
    });
}

  submitFile = () => {

    const file = this.state.uploadedFile;

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });

        // TODO Send request and store in database
      }
    });
  }

  componentWillMount() {
    this.callAPI();
  }


  render() {

    const items = this.state.arr.map(item => (
      <p stuff={item} key={item.id}>{item.name}</p>
    ));
    return (
      <div>
        <h1>this is a list view component</h1>


        {!this.state.loading ? items : ''}

        <input type="file" multiple={false}
            accept="image/*" name="image" onChange={(e) => this.handleChange(e.target.files)} />

        <button onClick={this.submitFile}>Submit</button>
      </div>
    );
  }
};

export default ListView;
