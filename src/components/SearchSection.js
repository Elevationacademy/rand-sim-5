import React, { Component } from 'react';

class SearchSection extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleSearch = () => this.props.handleSearch(this.state.input, true)

  handleInput = e => this.setState({ input: e.target.value })

  handleKeyDown = e => { if (e.key === 'Enter') { this.handleSearch() } }

  render() {
    return (
      <div id="outer-search">
        <div id="search-container">
          <input
            type="text"
            id="search"
            placeholder="search photos"
            value={this.state.input}
            onChange={this.handleInput}
            onKeyDown={this.handleKeyDown}
          />
          <div id="search-btn" onClick={this.handleSearch}>
            <i className="fas fa-search" />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchSection;