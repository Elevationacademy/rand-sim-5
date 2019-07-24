import React, { Component } from 'react';

class Photo extends Component {

  render() {
    const image = this.props.findPhoto(this.props.match.params.imageID)

    return (
      <img src={image.url} />
    )
  }
}

export default Photo