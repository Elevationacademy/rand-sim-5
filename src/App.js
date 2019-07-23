import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photo from './components/Photo'
import Home from './components/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  requestPhotos = async input => {
    const images = await axios.get(`http://localhost:8989/api/photos/search/${input}`);
    this.setState({ images: images.data });
  };

  findPhoto = id => this.state.images.find(i => i.id === id);

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Home images={this.state.images} requestPhotos={this.requestPhotos}/>} />
        <Route path="/image/:imageID" exact render={({ match }) => <Photo match={match} findPhoto={this.findPhoto} />} />
      </Router>
    );
  }
}

export default App;
