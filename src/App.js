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
        },
        foundTrails: [],
        trailsByPark: []
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
 
  fetch('https://whateverly-datasets.herokuapp.com/api/v1/trails')
    .then(response => response.json())
    .then(trailData => {
      this.setState( {
        trailData: trailData
      })
    })
    .catch(error => console.log(error));
  }

  toggleLandingScreen = () => {
    this.setState({
      landingScreen: false
    })
  }

  getTrailsByLocation = (location) => {
    const parksByLocation = this.state.parkData.nationalParks.filter((park) => {
      return park.usState === location;
    })

    console.log(parksByLocation);
    const trailsByPark = this.state.trailData.trails.reduce((trailsArr, trail) => {
      parksByLocation.forEach((park) => {
        if(park.parkName === trail.parkName) {
          trailsArr.push(trail)
        }
      })

    return trailsArr;
    }, [])

    this.setState({
      trailData: {
          trails: trailsByPark,
        }
    })
  }

  searchTrails = (searchInput) => {
    let foundTrails = this.state.trailData.trails.filter((trail) => {
      return trail.trailName.toLowerCase().includes(searchInput);
    })
    this.setState({
      trailData: {
          trails: foundTrails,
        }
    })
  }

  //take trail data and filter the trails by the usState (location) and then pass that array into trailList

  render() {
    if (this.state.landingScreen) {
      return (
        <div className="App">
          <LandingScreen parks={this.state.parkData.nationalParks}
          toggleLandingScreen={this.toggleLandingScreen}
          getTrailsByLocation={this.getTrailsByLocation}/>

        </div>
        )
    } else {
      return (
      <div className="App">
        <Header searchTrails={this.searchTrails} />
        <TrailList trails={this.state.trailData.trails} 
                    foundTrails={this.state.foundTrails} />

      </div>
    
      );
    }
  }
}

export default App;
