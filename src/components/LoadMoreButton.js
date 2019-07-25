import React, { Component } from 'react'

class LoadMoreButton extends Component {

  requestPhotos = () => this.props.requestPhotos(null, false)

  render() {
    return (
      <div id="btn-container">{this.props.page ? <div id="load-btn" onClick={this.requestPhotos} >LOAD MORE</div> : null}</div>
    )
  }
}

export default LoadMoreButton