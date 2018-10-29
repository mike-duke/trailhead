import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import './styles/Main.scss';
import TrailList from './TrailList.js';
// import Header from './Header.js';
// import Search from './Search.js';
import LocationDisplay from './LocationDisplay.js';
import LandingScreen from './LandingScreen.js';
import Controls from './Controls.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      landingScreen: true,
      parkData: [],
      trailData: [],
      selectedLocation: ''
    }
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/nationalParks')
      .then(response => response.json())
      .then(parkData => {
        this.setState({
          parkData: parkData.nationalParks
        })
      })
      .catch(error => console.log(error))

    fetch('https://whateverly-datasets.herokuapp.com/api/v1/trails')
      .then(response => response.json())
      .then(trailData => {
        this.setState({
          trailData: trailData.trails
        })
      })
      .catch(error => console.log(error));
  }

  fetchTrails = () => {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/trails')
      .then(response => response.json())
      .then(trailData => {
        this.setState({
          trailData: trailData.trails
        })
      })
      .catch(error => console.log(error));
  }

  toggleLandingScreen = () => {
    this.setState({
      landingScreen: !this.state.landingScreen
    })
  }

  getTrailsByLocation = (location) => {
      const parksByLocation = this.state.parkData.filter((park) => {
        return park.usState === location;
      });

      const trailsByPark = this.state.trailData.reduce((trailsArr, trail) => {
        parksByLocation.forEach((park) => {
          if (park.parkName === trail.parkName) {
            trailsArr.push(trail);
          }
        });
        return trailsArr;
      }, []);

    this.setState({
      trailData: trailsByPark,
      selectedLocation: location
    })
  }

  searchTrails = (searchInput) => {
    let foundTrails = this.state.trailData.filter((trail) => {
      return trail.trailName.toLowerCase().includes(searchInput);
    })

    if (this.state.landingScreen) {
        this.state.landingScreen = false;
        let newLocation = this.state.parkData.filter((park) => {
          return park.parkName.includes(foundTrails[0].parkName)
        })
        let newLocationAbr = newLocation[0].usState
        this.setState({
          selectedLocation: newLocationAbr
        })
    }

    this.setState({
      trailData: foundTrails
    })
  }

  filterByDistance = (distance) => {
    let trailByDistance = this.state.trailData.filter((trail) => {
      return trail.distanceRoundtripMiles === parseInt(distance);
    })
    this.setState({
      trailData: trailByDistance
    })
  }

  filterByDifficulty = (difficulty) => {
    let trailByDifficulty = this.state.trailData.filter((trail) => {
      return trail.difficultyRating === parseInt(difficulty)
    })
    this.setState({
      trailData: trailByDifficulty
    })
  }

  render() {
    console.log(this.state.trailData)
    if (this.state.landingScreen) {
      return ( 
        <div className = "App" >
          <LandingScreen parks = {this.state.parkData} 
                        toggleLandingScreen = {this.toggleLandingScreen} 
                        getTrailsByLocation = {this.getTrailsByLocation}
                        fetchTrails={this.fetchTrails} 
                        searchTrails={this.searchTrails} />
        </div>
      )
    } else {
      return ( 
        <div className = "App" > 
          <div className = "side-panel" >
            <LocationDisplay location = {this.state.selectedLocation} /> 
            <Controls fetchTrails={this.fetchTrails} 
                      filterByDistance={this.filterByDistance}
                      filterByDifficulty={this.filterByDifficulty}
                      searchTrails = {this.searchTrails} 
                      toggleLandingScreen={this.toggleLandingScreen}
                      trails = {this.state.trailData} />
          </div>   
            <TrailList trails = {this.state.trailData} />
        </div>

      );
    }
  }
}

export default App;