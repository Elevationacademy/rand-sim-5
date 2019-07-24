import React, { Component } from 'react';
import SearchSection from './SearchSection';
import ImageSection from './ImageSection';

class Home extends Component {

  render() {
    return (
      <div>
        <SearchSection requestPhotos={this.props.requestPhotos} />
        <ImageSection images={this.props.images} />
        {this.props.page ? <div>LOAD MORE</div> : null}
      </div>
    );
  }
}

export default Home