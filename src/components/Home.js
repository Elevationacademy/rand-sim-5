import React, { Component } from 'react';
import SearchSection from './SearchSection';
import ImageSection from './ImageSection';

class Home extends Component {

  render() {
    return (
      <div>
        <SearchSection requestPhotos={this.props.requestPhotos} />
        {this.props.images.length ? <ImageSection requestPhotos={this.props.requestPhotos} page={this.props.page} images={this.props.images} /> : null}
      </div>
    );
  }
}

export default Home