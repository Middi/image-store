import React, { Component } from 'react';
import axios from 'axios';

class ListView extends Component {


  state = {
    loading: true,
    arr: [],
    image: null
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


  handleChange( data ) {
    const image = data[0];
    this.setState({
     image,
     imageName: image.name
    });
  }

  submitFile = () => {
    const data = {image: this.state.imageName}
    axios.post('http://localhost:5000/image', data)
    .then(res => {
      console.log('file response', res);
    })
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

      <input type="file" name="avatar" onChange={(e) => this.handleChange(e.target.files)} />

      <button onClick={this.submitFile}>Submit</button>
      </div>
  );
    }
};

export default ListView;
