import React, { Component } from 'react';
import './styles/Controls.scss';
import Search from './Search.js';


export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      distance: ''
    }
  }

  updateDistance = (event) => {
    this.setState({
      distance: event.target.value
    })
  }
  
  getDistance = () => {
    this.props.filterByDistance(this.state.distance)
  }

  render() {
    return (
      <div className="controls-container">
        <div className="select-container">
        <select onChange={this.updateDistance} className="distance-select">
          {
            this.props.trails.sort((trailA, trailB) => {
              return trailA.distanceRoundtripMiles - trailB.distanceRoundtripMiles
            }).map((trail, index) => {
              return <option key={index} value={trail.distanceRoundtripMiles}>{trail.distanceRoundtripMiles}</option>
            })
          }
        </select>
        <select>

        </select>
        <button onClick={this.getDistance}>Submit</button>
        </div>
        <Search searchTrails={this.props.searchTrails} />
        <button onClick={this.props.resetLandingScreen} className="reset-search-button">Start Over</button>
      </div>
    )
  }

}