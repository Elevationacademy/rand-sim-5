import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photo from './components/PhotoSection'
import Home from './components/Home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      page: 0,
      input: ''
    };
  }

  addPage = async (newSearch) => await newSearch ? this.setState({ page: 1 }) : this.setState({ page: ++this.state.page })

  // resetPage = async () => await this.setState({ page: 0 })

  requestPhotos = async (input, newSearch) => {
    await this.addPage(newSearch)
    if (input) { await this.setState({ input }) }
    console.log(this.state.page)
    const newImages = await axios.get(`http://localhost:8989/api/photos/search/${this.state.input}?page=${this.state.page}`)
    const allImages = [...this.state.images, ...newImages.data]
    this.setState({ images: allImages });
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
