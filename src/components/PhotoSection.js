import React, { Component } from 'react'
import axios from 'axios'
import BigPhoto from './BigPhoto';


class PhotoSection extends Component {
  constructor() {
    super()
    this.state = {
      image: {}
    }
  }

  componentDidMount = async () => {
    const image = await axios.get(`http://localhost:8989/api/photos/${this.props.match.params.imageID}`)
    this.setState({ image: image.data })
  }

  render() {
    const image = this.state.image

    return (
      <div id="single-image-container">
        {image.urls ? <BigPhoto image={image} /> : null}
      </div>
    )
  }
}

export default PhotoSection
