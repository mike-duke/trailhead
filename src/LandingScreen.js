import React, { Component } from 'react';
import './styles/LandingScreen.scss';



export default class LandingScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="landing-screen">
        
        <h1>Trailhead</h1>
        <select className="location-select">{this.props.parks.reduce((locationArr, location) => {
          if (!locationArr.includes(location.usState)){
            locationArr.push(location.usState)
          }
          return locationArr; 
        }, []).map((usState) => {
          return <option value={usState}>{usState}</option>
        })
      }

        </select>
        <button className="submit-button">CHOSE A LOCATION</button>
      </div>
    )
  }
}
          