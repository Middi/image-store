import React, { Component } from 'react';
import keys from '../../keys';
import axios from 'axios';

import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = keys.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = keys.CLOUDINARY_UPLOAD_URL;
class ListView extends Component {


  state = {
    loading: true,
    arr: [],
    uploadedFile: null,
    uploadedFileCloudinaryUrl: null
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

  post(data) {
    const url = {data}
    console.log(url)
    fetch('/image', {
      method: 'post',
      headers: new Headers({
          'Content-Type': 'application/json',
      }),
      body: JSON.stringify(url)
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

      if (response.body.secure_url) {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });

        this.post(this.state.uploadedFileCloudinaryUrl);
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

        {this.state.uploadedFileCloudinaryUrl ? <img src={this.state.uploadedFileCloudinaryUrl} /> : ''}

        <input type="file" multiple={false}
            accept="image/*" name="image" onChange={(e) => this.handleChange(e.target.files)} />

        <button onClick={this.submitFile}>Submit</button>
      </div>
    );
  }
};

export default ListView;
