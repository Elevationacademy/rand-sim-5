import React, { Component } from 'react';
import Image from './Image';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  // fitWidth: true
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

  // componentDidMount() {
  //     this.hide();
  // }
  // handleImagesLoaded(imagesLoadedInstance) {
  //     this.show();
  // }

  requestPhotos = () => this.props.requestPhotos(null, false)

  render() {
    // let images = this.props.images.length ? this.props.images : this.createLazyLoader()
    // !images.length ? images = this.createLazyLoader() : null
    // this.checkIfImagesExist()

    const childElements = this.props.images.map(i => <Image key={i.id} image={i} />);
    const imagesLoadedOptions = { background: '.image' };

    return (
      <div>
        <Masonry
          // className={'my-gallery-class'} // default ''
          // elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          // disableImagesLoaded={false} // default false
          // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          onImagesLoaded={this.handleImagesLoaded}
          // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements}
        </Masonry>
        <div id="btn-container">{this.props.page ? <div id="load-btn" onClick={this.requestPhotos} >LOAD MORE</div> : null}</div>
        </div>
    );
  }
}

export default ImageSection;
