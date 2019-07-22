import  React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Dashboard from './components/Dashboard';

class SearchSection extends Component {

  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  requestPhotos = () => this.props.requestPhotos(this.state.input)

  handleInput = e => this.setState({ input: e.target.value })

  render() {
    return (
      <div id="search-container">
        <input type="text" id="search" value={this.state.input} onChange={this.handleInput}/>
        <button id="search-btn" onClick={this.requestPhotos}>Photo Me!</button>
      </div>
    )
  }
}

export default SearchSection