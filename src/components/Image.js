import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Image extends Component {


  render() {

    const image = this.props.image
    console.log(image)

    return (
      <div className="image">
        <div className="grid-sizer"></div>
        <Link className="grid-item" to={`image/${image.id}`}><img src={image.url} /></Link>
      </div>
    )
  }
}

export default Image