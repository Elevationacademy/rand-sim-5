import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Photo from './components/PhotoSection'
import Home from './components/Home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      page: 0,
      input: ''
    }
  }

  addPage = async (newSearch) => await newSearch ? this.setState({ page: 1 }) : this.setState({ page: ++this.state.page })

  getPhotos = async () => await axios.get(`http://localhost:8989/api/photos/search/${this.state.input}?page=${this.state.page}`)

  updateInput = async input => { if (input) { await this.setState({ input }) } }

  combineImages = newImages => [...this.state.images, ...newImages]

  handleSearch = async (input, newSearch) => {
    await this.addPage(newSearch)
    this.updateInput(input)
    const newImages = await this.getPhotos()
    const allImages = this.combineImages(newImages.data)
    this.setState({ images: allImages })
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Home images={this.state.images} page={this.state.page} handleSearch={this.handleSearch}/>} />
        <Route path="/image/:imageID" exact render={({ match }) => <Photo match={match} />} />
      </Router>
    );
  }
}

export default App
