import React, { Component } from 'react';
import './styles/LandingScreen.scss';



export default class LandingScreen extends Component {
  constructor() {
    super();
      this.state = {
        selectedLocation: ''
      }
  }

  updateSelectedLocation = (event) => {
    this.setState ( {
      selectedLocation: event.target.value
    })
  }

  displayTrailsByLocation = () => {
    this.props.toggleLandingScreen();
    this.props.getTrailsByLocation(this.state.selectedLocation);
  }

  render() {
    return (
      <div className="landing-screen-container">
        <div className="landing-screen">
          
          <h1>Trailhead</h1>
          <select onChange={this.updateSelectedLocation} className="location-select">
          <option>Select a state</option>
          {this.props.parks.reduce((locationArr, location) => {
            if (!locationArr.includes(location.usState)){
              locationArr.push(location.usState)
            }
            return locationArr; 
          }, []).map((usState, index) => {
            return <option key={index} value={usState}>{usState}</option>
          })
        }

          </select>
          <button onClick={this.displayTrailsByLocation} className="submit-button">CHOSE A LOCATION</button>
        </div>
      </div>
    )
  }
}
          