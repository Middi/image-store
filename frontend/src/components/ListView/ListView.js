import React, { Component } from 'react';
import './ListView.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


// The number of columns change by resizing the window
export default class ListView extends Component {
    
  state = {
          loading: true,
          arr: []
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
            .catch(err => {
              console.log(err)
            })
        }
      
      
        componentWillMount() {
          this.callAPI();
        }
      
      
        render() {
      
          const item = this.state.arr;

          return (
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 600: 2, 900: 3, 1100: 4}}>
                <Masonry columnsCount={4} gutter="10px">
                { this.state.loading ? ' ' : item.map((image, i) => (
                    <article className="card" key={i}>
                      <img
                          src={image.image}
                          style={{width: "100%", display: "block"}}
                      />
                      <div className="card-footer">
                        <h3 className="card-title">{image.title}</h3>
                        <p className="card-description">{image.description}</p>
                      </div>
                    </article>
                ))}
            </Masonry>
            </ResponsiveMasonry>
        )
    }
}
