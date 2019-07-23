import  React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import SearchSection from './components/SearchSection';
import ImageSection from './components/ImageSection';


class App extends Component {

  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  requestPhotos = async input => {
    const images = await axios.get(`http://localhost:8989/api/photos/search/${input}`)
    this.setState({ images: images.data })
  }

  render() {
    return (
      <div>
        <SearchSection requestPhotos={this.requestPhotos} />
        <ImageSection images={this.state.images} />
      </div>
    );
  }
}

export default App
