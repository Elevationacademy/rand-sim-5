import React, { Component } from 'react';
import Image from './Image';
import Masonry from 'react-masonry-component';
import LoadMoreButton from './LoadMoreButton';

class ImageSection extends Component {
  handleSearch = () => this.props.handleSearch(null, false);

  render() {
    const childElements = this.props.images.map(i => <Image key={i.id} image={i} />);

    const masonryOptions = {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item'
    };

    return (
      <div>
        <Masonry options={masonryOptions} onImagesLoaded={this.handleImagesLoaded}>
          {childElements}
        </Masonry>
        <LoadMoreButton page={this.props.page} handleSearch={this.props.handleSearch} />
      </div>
    );
  }
}

export default ImageSection;
