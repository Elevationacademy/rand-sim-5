import React, { Component } from 'react';
import Image from './Image';
import LazyLoader from './LazyLoader';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item'
  // percentPosition: true
};
class ImageSection extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  // createLazyLoader = () => {
  //   const loaderArray = []
  //   for (let i = 0; i < 20; i++) {
  //     loaderArray.push(<div className="empty-image"></div>)
  //   }

  //   return loaderArray
  // }

  checkIfImagesExist = () => {
    if (this.props.images.length) {
      this.setState({ isLoading: false });
    }
  };

  render() {
    // let images = this.props.images.length ? this.props.images : this.createLazyLoader()
    // !images.length ? images = this.createLazyLoader() : null
    // this.checkIfImagesExist()

    const childElements = this.props.images.map(i => <Image key={i.id} image={i} />);
    const imagesLoadedOptions = { background: '.image' };

    return (
      <Masonry
        // className={'my-gallery-class'} // default ''
        // elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        // disableImagesLoaded={false} // default false
        // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default ImageSection;
