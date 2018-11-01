import React, { Component } from 'react';
import './styles/Main.scss';
import Search from './Search.js';

export default class Controls extends Component {
  constructor(props) {
    super();
    this.state = {
      distance: null,
      difficulty: null,
      parkName: null,
      distanceDisabled: true,
      difficultyDisabled: true,
      parkDisabled: true,
      selectedLocation: props.location,
      allTrails: props.trails
    }
  }

  updateDifficulty = (event) => {
    this.setState({
      difficulty: event.target.value,
      difficultyDisabled: false
    });
  }

  updateDistance = (event) => {
    this.setState({
      distance: event.target.value,
      distanceDisabled: false
    });
  }

  updateParkName = (event) => {
    this.setState({
      parkName: event.target.value,
      parkDisabled: false
    });
  }

  resetApplication = () => {
    this.props.toggleLandingScreen();
  }

  resetFilters = () => {
    this.props.resetAllFilters(this.state.allTrails);
  }

  getFilterData = () => {
    if (this.state.difficulty !== null) {
      this.props.filterByDifficulty(this.state.difficulty)
    } else if (this.state.distance !== null) {
        this.props.filterByDistance(this.state.distance)
      } else if (this.state.parkName !== null) {
        this.props.filterByParkName(this.state.parkName)
      }
    }
  

  render() {
    return (
      <div className="controls-container">
        <h1 className="location-display">{this.state.selectedLocation}</h1>
        <div className="select-container">
          <hr />
          <h4>Number of Trails: {this.props.trails.length}</h4>
          <div className="distance-select-container">
            <select onChange={this.updateDistance} className="distance-select">
              <option hidden>Filter by distance (in miles)</option>
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
          </div>
          <div className="difficulty-select-container">
            <select onChange={this.updateDifficulty} className="difficulty-select">
              <option hidden>Filter by difficulty rating</option>
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
          </div>
          <div className="park-select-container">
            <select onChange={this.updateParkName} className="park-select">
              <option hidden>Filter by Park</option>
              {
                this.props.trails.reduce((arr, trail) => {
                  if (!arr.includes(trail.parkName)) {
                    arr.push(trail.parkName);
                  }
                  return arr;
                }, []).map((parkName, index) => {
                  return <option key={index} value={parkName}>{parkName}</option>
                })
              }
            </select>
          </div>
          <button onClick={this.getFilterData} className="apply-filters-button">Apply Filters</button> 
          <button onClick={this.resetFilters}  className="reset-filters-button">Reset Filters</button>    
        </div>
        
        <Search searchTrails={this.props.searchTrails} 
                trails={this.props.trails} />
        <button onClick={this.resetApplication} className="reset-search-button">Start Over</button>
      </div>
    );
  }
}