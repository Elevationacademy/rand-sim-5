import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Dashboard from './components/Dashboard';

class SearchSection extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  requestPhotos = () => this.props.requestPhotos(this.state.input, true);

  handleInput = e => this.setState({ input: e.target.value });

  render() {
    return (
      <div id="outer-search">
        <div id="search-container">
          <input type="text" id="search" placeholder="search photos" value={this.state.input} onChange={this.handleInput} />
          <div id="search-btn" onClick={this.requestPhotos}>
            <i className="fas fa-search" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSection;
