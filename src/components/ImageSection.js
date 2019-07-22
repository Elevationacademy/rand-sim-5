import React, { Component } from 'react';
import Image from './Image'

class ImageSection extends Component {


  render() {

    let images = this.props.images
    !images.length ? images.length = 10 : null

    return (
      <div>
        {/* {images.map(i => )} */}
      </div>
    )
  }
}

export default ImageSection