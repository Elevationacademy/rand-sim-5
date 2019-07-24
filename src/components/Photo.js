import React, { Component } from 'react';
import axios from 'axios';
import Palette from './Palette';

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      image: {}
    };
  }

  componentDidMount = async () => {
    const image = await axios.get(
      `http://localhost:8989/api/photos/${this.props.match.params.imageID}`
    );
    this.setState({ image: image.data });
  };



  renderData = image => {
    return (
      <div id="single-image">
        <img src={image.urls.regular} />
        <Palette palette={image.palette} />
        <div id="likes-section">
          <div id="likes"><i class="fas fa-thumbs-up"></i>{image.likes}</div>
          <div id="camera"><i class="fas fa-camera"></i>{image.camera.make}</div>
        </div>
      </div>
    );
  };

  render() {
    const image = this.state.image; //props.findPhoto(this.props.match.params.imageID)
    console.log(image);
    return <div id="single-image-container">{image.urls ? this.renderData(image) : null}</div>;
  }
}

export default Photo;
