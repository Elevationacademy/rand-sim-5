import React, { Component } from 'react';
import Image from './Image';
import Masonry from 'react-masonry-component';

class ImageSection extends Component {

  requestPhotos = () => this.props.requestPhotos(null, false)

  render() {
    const childElements = this.props.images.map(i => <Image key={i.id} image={i} />)

    const masonryOptions = {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
    }

    return (
      <div>
        <Masonry
          options={masonryOptions}
          onImagesLoaded={this.handleImagesLoaded}
        >
          {childElements}
        </Masonry>
        <div id="btn-container">{this.props.page ? <div id="load-btn" onClick={this.requestPhotos} >LOAD MORE</div> : null}</div>
      </div>
    );
  }
}

export default ImageSection;
