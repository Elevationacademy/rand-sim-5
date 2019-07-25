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
    image.tags.splice(3)

    return (
      <div id="single-image">
        <img alt="" src={image.urls.regular} />

          <Palette palette={image.palette} />
          <div id="likes-section">
            <div id="likes"><i className="fas fa-thumbs-up"></i>{image.likes}</div>
            <div id="tags">
              {image.tags.map((p, i) => <span className="tag" key={i}>{p}</span>)}
            </div>
            <div id="camera"><i className="fas fa-camera"></i>{image.camera.make}</div>
            </div>

      </div>
    );
  };

  render() {
    const image = this.state.image

    return (
      <div id="single-image-container">
        {image.urls ? this.renderData(image) : null}
      </div>
    );
  }
}

export default Photo;
