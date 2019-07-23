import  React, { Component } from 'react';

class Image extends Component {


  render() {

    console.log(this.props.image)

    return (
      <div className="image">
        <img src={this.props.image.url}/>
      </div>
    )
  }
}

export default Image