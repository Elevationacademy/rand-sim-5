import React, { Component } from 'react';
import Image from './Image'
import LazyLoader from './LazyLoader'

class ImageSection extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  // createLazyLoader = () => {
  //   const loaderArray = []
  //   for (let i = 0; i < 20; i++) {
  //     loaderArray.push(<div className="empty-image"></div>)
  //   }

  //   return loaderArray
  // }

  checkIfImagesExist = () => {
    if (this.props.images.length) { this.setState({ isLoading: false }) }
  }

  render() {
    // let images = this.props.images.length ? this.props.images : this.createLazyLoader()
    // !images.length ? images = this.createLazyLoader() : null
    // this.checkIfImagesExist()

    return (
      <div id="images-container">
        {/* {this.state.isLoading ? <LazyLoader /> :} */}
          {this.props.images.map(i => <Image image={i} />)}
      </div>
    )
  }
}

export default ImageSection