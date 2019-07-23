import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Image extends Component {


  render() {

    const image = this.props.image
    console.log(image)

    return (
      <div className="image">
        <Link to={`image/${image.id}`}><img src={image.url} /></Link>
      </div>
    )
  }
}

export default Image