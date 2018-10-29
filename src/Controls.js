import React, { Component } from 'react';
import './styles/Main.scss';
import Search from './Search.js';


export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      distance: '',
      difficulty: ''
    }
  }

  updateDifficulty = (event) => {
    this.setState({
      difficulty: event.target.value
    })
  }

  updateDistance = (event) => {
    this.setState({
      distance: event.target.value
    })
  }

  getDifficulty = () => {
    this.props.filterByDifficulty(this.state.difficulty)
  }
  
  getDistance = () => {
    this.props.filterByDistance(this.state.distance)
  }

  resetApplication = () => {
    this.props.toggleLandingScreen();
  }

  render() {
    console.log(this.props.trails)
    return (
      <div className="controls-container">
        <div className="select-container">

          <select onChange={this.updateDistance} className="distance-select">
            <option>Filter by distance (in miles)</option>
            {
              this.props.trails.reduce((arr, trail) => {
                if (!arr.includes(trail.distanceRoundtripMiles)) {
                  arr.push(trail.distanceRoundtripMiles)
                }
                return arr
              }, []).sort((distanceA, distanceB) => {
                return distanceA - distanceB;
              }).map((trailDistance, index) => {
                return <option key={index} value={trailDistance}>{trailDistance}</option>
              })
            }
          </select>
          <button onClick={this.getDistance}>Submit</button>

          <select onChange={this.updateDifficulty} className="difficulty-select">
            <option>Filter by difficulty rating</option>
            {
              this.props.trails.reduce((arr, trail) => {
                if (!arr.includes(trail.difficultyRating)) {
                  arr.push(trail.difficultyRating)
                }
                return arr
              }, []).sort((difficultyA, difficultyB) => {
                return difficultyA - difficultyB;
              }).map((trailDifficulty, index) => {
                return <option key={index} value={trailDifficulty}>{trailDifficulty}</option>
              })
            }
          </select>
          <button onClick={this.getDifficulty}>Submit</button>
        </div>
        <Search searchTrails={this.props.searchTrails} />
        <button onClick={this.resetApplication} className="reset-search-button">Start Over</button>
      </div>
    )
  }
}