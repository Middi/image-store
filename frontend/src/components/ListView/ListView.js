import React, { Component } from 'react';

class ListView extends Component {


  state = {
    loading: true,
    arr: [],
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
      </div>
  );
    }
};

export default ListView;