import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrailList from './TrailList.js';
import Header from './Header.js';
import Search from './Search.js'



class App extends Component {
  constructor() {
    super();
      this.state = {
        trailData: {
          trails: []
        }
      }
  }
  componentDidMount() {
  fetch('https://whateverly-datasets.herokuapp.com/api/v1/trails')
    .then(response => response.json())
    .then(trailData => {
      this.setState( {
        trailData: trailData
      })
    })
    .catch(error => console.log(error))
}
  render() {
    return (
      <div className="App">
        <h1>TrailHead</h1>
        <Header />
        <TrailList trails={this.state.trailData.trails}/>
      </div>
    );
  }
}

export default App;
