import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import TrailList from './TrailList.js';
import Header from './Header.js';
import Search from './Search.js'
import LocationDisplay from './LocationDisplay.js';
import LandingScreen from './LandingScreen.js';



class App extends Component {
  constructor() {
    super();
      this.state = {
        landingScreen: true,
        parkData: {
          nationalParks: [],
        },
        trailData: {
          trails: [],
        }
      }
    }

  componentDidMount() {
   fetch('https://whateverly-datasets.herokuapp.com/api/v1/nationalParks')
    .then(response => response.json())
    .then(parkData => {
      this.setState( {
        parkData: parkData
      })
    })
    .catch(error => console.log(error))  
  }

  getTrails() {
  fetch('https://whateverly-datasets.herokuapp.com/api/v1/trails')
    .then(response => response.json())
    .then(trailData => {
      this.setState( {
        trailData: trailData
      })
    })
    .catch(error => console.log(error))
  }

  toggleLandingScreen() {
    this.setState({
      landingScreen: false
    })
  }

  render() {
    if (this.state.landingScreen) {
      return (
        <div className="App">
          <LandingScreen parks={this.state.parkData.nationalParks}/>
        </div>
        )
    } else {
      return (
      <div className="App">
        <h1>TrailHead</h1>
        <Header />
        <TrailList trails={this.state.trailData.trails}/>

      </div>
    
      );
    }
  }
}

export default App;
