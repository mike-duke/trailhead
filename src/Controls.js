import React, { Component } from 'react';
import './styles/Controls.scss';
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
    this.props.fetchTrails();
    this.props.toggleLandingScreen();
  }

  render() {
    return (
      <div className="controls-container">
        <div className="select-container">

          <select onChange={this.updateDistance} className="distance-select">
            <option>Filter by distance (in miles)</option>
            {
              this.props.trails.sort((trailA, trailB) => {
                return trailA.distanceRoundtripMiles - trailB.distanceRoundtripMiles
              }).map((trail, index) => {
                return <option key={index} value={trail.distanceRoundtripMiles}>{trail.distanceRoundtripMiles}</option>
              })
            }
          </select>
          <button onClick={this.getDistance}>Submit</button>

          <select onChange={this.updateDifficulty} className="difficulty-select">
            <option>Filter by difficulty rating</option>
            {
              this.props.trails.sort((trailA, trailB) => {
                return trailA.difficultyRating - trailB.difficultyRating;
              }).map((trail, index) => {
                return <option key={index} value={trail.difficultyRating}>{trail.difficultyRating}</option>
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