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
      images: [],
      page: 0
    };
  }

  addPage = async (newSearch) => await newSearch ? this.setState({ page: 1 }) : this.setState({ page: ++this.state.page })

  // resetPage = async () => await this.setState({ page: 0 })

  requestPhotos = async (input, newSearch) => {
    await this.addPage(newSearch)
    console.log(this.state.page)
    const images = await axios.get(`http://localhost:8989/api/photos/search/${input}?page=${this.state.page}`)
    this.setState({ images: images.data });
  };

  findPhoto = id => this.state.images.find(i => i.id === id);

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Home images={this.state.images} page={this.state.page} requestPhotos={this.requestPhotos}/>} />
        <Route path="/image/:imageID" exact render={({ match }) => <Photo match={match} findPhoto={this.findPhoto} />} />
      </Router>
    );
  }
}

export default App;
