import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';



class Image extends Component {


  render() {

    const image = this.props.image
    console.log(image)

    return (
      <div className="image">
        <div className="grid-sizer"></div>
        <Link className="grid-item" to={`image/${image.id}`}><img alt="" src={image.url} /></Link>
      </div>
    )
  }
}

class Home extends Component {

  render() {
    return (
      <div>
        <SearchSection requestPhotos={this.props.requestPhotos} />
        {this.props.images.length ? <PhotoGallery requestPhotos={this.props.requestPhotos} page={this.props.page} images={this.props.images} /> : null}
      </div>
    );
  }
}

class Color extends Component {

  render() {
    const r = this.props.rgb[0]
    const g = this.props.rgb[1]
    const b = this.props.rgb[2]

    return (
      <div className="color-scheme" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}></div>
    )
  }
}

class Palette extends Component {

  constructor() {
    super()
    this.state = {
      palette: []
    }
  }

  populatePalette = () => {
    const paletteKeys = Object.keys(this.props.palette)

    for (let key of paletteKeys) {
      this.state.palette.push(this.props.palette[key])
    }
  }

  render() {

    this.populatePalette()

    return (
      <div id="color-palette">
        {this.state.palette.map((p, i) => <Color key={i} rgb={p.rgb} />)}
      </div>
    )
  }
}

//masonryOptions is used by PhotoGallery class
const masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  // fitWidth: true
  // percentPosition: true
};
class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  // createLazyLoader = () => {
  //   const loaderArray = []
  //   for (let i = 0; i < 20; i++) {
  //     loaderArray.push(<div className="empty-image"></div>)
  //   }

  //   return loaderArray
  // }

  checkIfImagesExist = () => {
    if (this.props.images.length) {
      this.setState({ isLoading: false });
    }
  };

  // componentDidMount() {
  //     this.hide();
  // }
  // handleImagesLoaded(imagesLoadedInstance) {
  //     this.show();
  // }

  requestPhotos = () => this.props.requestPhotos(null, false)

  render() {
    // let images = this.props.images.length ? this.props.images : this.createLazyLoader()
    // !images.length ? images = this.createLazyLoader() : null
    // this.checkIfImagesExist()

    const childElements = this.props.images.map(i => <Image key={i.id} image={i} />);
    const imagesLoadedOptions = { background: '.image' };

    return (
      <div>
        <Masonry
          // className={'my-gallery-class'} // default ''
          // elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          // disableImagesLoaded={false} // default false
          // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          onImagesLoaded={this.handleImagesLoaded}
          // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements}
        </Masonry>
        </div>
    );
  }
}
class Photo extends Component {
  constructor() {
    super();
    this.state = {
      image: {}
    };
  }

  componentDidMount = async () => {
    const image = await axios.get(`http://localhost:8989/api/photos/${this.props.match.params.imageID}`);
    this.setState({ image: image.data });
  };



  renderData = image => {
    image.tags.splice(3)

    return (
      <div id="single-image">
        <img alt="" src={image.urls.regular} />

          <Palette palette={image.palette} />
          <div id="likes-section">
            <div id="likes"><i className="fas fa-thumbs-up"></i>{image.likes}</div>
            <div id="tags">
              {image.tags.map((p, i) => <span className="tag" key={i}>{p}</span>)}
            </div>
            <div id="camera"><i className="fas fa-camera"></i>{image.camera.make}</div>
            </div>

      </div>
    );
  };

  render() {
    const image = this.state.image; //props.findPhoto(this.props.match.params.imageID)

    return (
      <div id="single-image-container">
        {image.urls ? this.renderData(image) : null}
      </div>
    );
  }
}

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
    const newImages = await axios.get(`http://localhost:8989/api/photos/search/${this.state.input}`)
    console.log(newImages)
    this.setState({ images: newImages.data });
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
