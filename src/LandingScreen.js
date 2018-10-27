import React, { Component } from 'react';
import './styles/LandingScreen.scss';



export default class LandingScreen extends Component {
  constructor() {
    super();
  }

  displayTrailsByLocation = () => {
    this.props.toggleLandingScreen();
    this.props.getTrails();
  }

  render() {
    return (
      <div className="landing-screen-container">
        <div className="landing-screen">
          
          <h1>Trailhead</h1>
          <select className="location-select">{this.props.parks.reduce((locationArr, location) => {
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
          