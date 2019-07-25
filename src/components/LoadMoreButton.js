import React, { Component } from 'react';

class LoadMoreButton extends Component {
  handleSearch = () => this.props.handleSearch(null, false);

  render() {
    return (
      <div id="btn-container">
        {this.props.page ? (<div id="load-btn" onClick={this.handleSearch}>LOAD MORE</div>) : null}
      </div>
    );
  }
}

export default LoadMoreButton;
