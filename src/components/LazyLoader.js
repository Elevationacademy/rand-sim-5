import  React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// // import Dashboard from './components/Dashboard';

class LazyLoader extends Component {

  constructor() {
    super()
    this.state = {

    }
  }


  render() {

    let boxes = []
    boxes.length = 10
    return (
      <div>
        {boxes.map(b =>
          <div className="empty-image"></div>)}
      </div>
    )
  }
}

export default LazyLoader
